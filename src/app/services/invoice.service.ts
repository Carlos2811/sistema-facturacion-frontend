import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvoiceCreate } from '../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'https://localhost:44342/api'; // Ajusta a tu backend

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clients`);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  createInvoice(dto: InvoiceCreate): Observable<any> {
    return this.http.post(`${this.apiUrl}/invoice`, dto);
  }

  searchInvoices(params: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/invoice/search`, { params });
  }
}