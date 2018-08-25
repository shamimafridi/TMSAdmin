import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { TablesRoutingModule, routedComponents } from "./tables-routing.module";
import { SmartTableService } from "../../@core/data/smart-table.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ATAuthJWTInterceptor } from "../../ATAuthJWTInterceptor";

@NgModule({
  imports: [ThemeModule, TablesRoutingModule, Ng2SmartTableModule],
  declarations: [...routedComponents],
  providers: [
    SmartTableService,
    { provide: HTTP_INTERCEPTORS, useClass: ATAuthJWTInterceptor, multi: true }
  ]
})
export class TablesModule {}
