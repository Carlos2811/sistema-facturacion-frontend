import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class InvoiceSearchComponent {
  results: any[] = [];
  type = 'number';
  clientId!: number;
  invoiceNumber = '';
  from!: string;
  to!: string;

  constructor(private svc: InvoiceService) {}

  search() {
    const params: any = { type: this.type };
    if (this.type === 'client') params.clientId = this.clientId;
    if (this.type === 'number') params.number = this.invoiceNumber;
    if (this.type === 'date') {
      params.from = this.from;
      params.to = this.to;
    }
    this.svc.searchInvoices(params).subscribe(r => (this.results = r));
  }
}