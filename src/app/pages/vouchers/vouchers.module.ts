import { ATAuthJWTInterceptor } from "./../../ATAuthJWTInterceptor";
import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import {
  VouchersRoutingModule,
  routedComponents
} from "./vouchers-routing.module";
import { UserService } from "./journal-vouchers/UserService";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TieredMenuModule } from "primeng/tieredmenu";
// import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [
    // AtModule,,
    ThemeModule,
    Ng2SmartTableModule,
    HttpClientModule,
    // HttpClientModule,
    VouchersRoutingModule,
    TieredMenuModule
    // Ng2SmartTableModule,
  ],
  declarations: [...routedComponents],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ATAuthJWTInterceptor, multi: true },
    UserService
    // SmartTableService,
  ]
})
export class VouchersModule {}
