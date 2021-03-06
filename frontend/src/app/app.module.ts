import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FancyComponentComponent } from './fancy.component/fancy.component.component';
import { NiceComponent } from './nice/nice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreaComponent } from './dashboard/area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyComponentComponent,
    NiceComponent,
    DashboardComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
