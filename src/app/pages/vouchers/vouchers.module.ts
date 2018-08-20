import { ATAuthJWTInterceptor } from './../../ATAuthJWTInterceptor';
import { Http } from '@angular/http';
import { AtModule } from './../../at-components/at-module';
import { NgModule } from '@angular/core';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { VouchersRoutingModule, routedComponents } from './vouchers-routing.module';
import { UserService } from './journal-vouchers/UserService';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [
    AtModule,
    ThemeModule,
    HttpClientModule,
   // HttpClientModule,
    VouchersRoutingModule,

    // Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ATAuthJWTInterceptor, multi: true},
    UserService,
   // Http
    // SmartTableService,
  ],
})
export class VouchersModule { }
