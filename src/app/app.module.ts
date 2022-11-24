import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmpentryComponent } from './empentry/empentry.component';
import { EmpviewComponent } from './empview/empview.component';
import { EmpsearchComponent } from './empsearch/empsearch.component';
import { EmpdeleteComponent } from './empdelete/empdelete.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
const myrout:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  
  },
  {
    path:"entry",
    component:EmpentryComponent
  },
  {
    path:"view",
    component:EmpviewComponent
  },
  {
    path:"search",
    component:EmpsearchComponent
  },
  {
    path:"delete",
    component:EmpdeleteComponent
  },
  {
    path:"edit",
    component:EmpeditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmpentryComponent,
    EmpviewComponent,
    EmpsearchComponent,
    EmpdeleteComponent,
    EmpeditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
