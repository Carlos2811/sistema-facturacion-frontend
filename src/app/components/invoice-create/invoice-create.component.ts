import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 👈 importa aquí
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {
  form!: FormGroup;
  clients: any[] = [];
  products: any[] = [];

  constructor(private fb: FormBuilder, private svc: InvoiceService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      invoiceNumber: ['', Validators.required],
      clientId: [null, Validators.required],
      details: this.fb.array([]),
      subtotal: [0],
      tax: [0],
      total: [0]
    });

    this.svc.getClients().subscribe(c => (this.clients = c));
    this.svc.getProducts().subscribe(p => (this.products = p));

    this.addDetail();
  }

  get details(): FormArray {
    return this.form.get('details') as FormArray;
  }

  addDetail() {
    const group = this.fb.group({
      productId: [null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0],
      total: [0]
    });

  group.get('productId')?.valueChanges.subscribe(pid => {
  const product = this.products.find(x => x.productId == pid);
    if (product) {
      const qty = group.value.quantity ?? 0; // 👈 solución
      group.patchValue({
        unitPrice: product.unitPrice,
        total: product.unitPrice * qty
      });
      this.updateTotals();
    }
  });

  group.get('quantity')?.valueChanges.subscribe(qty => {
    const up = group.value.unitPrice ?? 0;
    group.patchValue({ total: up * (qty ?? 0) }, { emitEvent: false });
    this.updateTotals();
  });

    this.details.push(group);
  }

  removeDetail(i: number) {
    this.details.removeAt(i);
    this.updateTotals();
  }

  updateTotals() {
    const subtotal = this.details.controls.reduce(
      (acc, d) => acc + d.value.total,
      0
    );
    const tax = +(subtotal * 0.19).toFixed(2);
    const total = +(subtotal + tax).toFixed(2);

    this.form.patchValue({ subtotal, tax, total }, { emitEvent: false });
  }

  save() {
    if (this.form.invalid) return;
    const dto = this.form.getRawValue();
    this.svc.createInvoice(dto).subscribe({
      next: () => alert('Factura creada con éxito!'),
      error: err => alert('Error: ' + err.message)
    });
  }
}