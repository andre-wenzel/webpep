import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FancyComponentComponent } from './fancy.component/fancy.component.component';
import { AppComponent } from './app.component';
import { NiceComponent } from './nice/nice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreaComponent } from './dashboard/area/area.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fancy', component: FancyComponentComponent },
  { path: 'nice', component: NiceComponent },
  { path: 'area', component: AreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
