import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmpentryComponent } from './empentry/empentry.component';
import { EmpviewComponent } from './empview/empview.component';
import { EmpsearchComponent } from './empsearch/empsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmpentryComponent,
    EmpviewComponent,
    EmpsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
