import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaComponent } from "./components/tabla/tabla.component"
import { GraficasComponent } from "./components/graficas/graficas.component"
import { HomeComponent } from "./components/home/home.component"
import { LoginComponent } from "./components/login/login.component"

const routes: Routes = [
  { path: 'tabla', component: TablaComponent },
  { path: 'grafica', component: GraficasComponent},
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
