import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoiceCreateComponent } from './components/invoice-create/invoice-create.component';
import { InvoiceSearchComponent } from './components/invoice-search/invoice-search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'create', component: InvoiceCreateComponent },
  { path: 'search', component: InvoiceSearchComponent },
  { path: '', redirectTo: 'create', pathMatch: 'full' } // default
];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

