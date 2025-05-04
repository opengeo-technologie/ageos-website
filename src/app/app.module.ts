import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PublicModule } from "./public/public.module";
import { RiskManagementModule } from "./risk-management/risk-management.module";
import { AdminModule } from "./admin/admin.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { authInterceptor } from "./auth.interceptor";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    AdminModule,
    RiskManagementModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
