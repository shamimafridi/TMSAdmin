import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalVouchersComponent } from './journal-vouchers/journal-voucher.component';

const routes: Routes = [{
  path: '',
  component: JournalVouchersComponent,
  children: [{
    path: 'journal-vouchers',
    component: JournalVouchersComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VouchersRoutingModule { }

export const routedComponents = [
  JournalVouchersComponent,
];
