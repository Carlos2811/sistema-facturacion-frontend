export interface InvoiceDetail {
  productId: number;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface InvoiceCreate {
  invoiceNumber: string;
  clientId: number;
  details: InvoiceDetail[];
  subtotal: number;
  tax: number;
  total: number;
}