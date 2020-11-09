import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaComponent } from "./components/tabla/tabla.component"
import { GraficasComponent } from "./components/graficas/graficas.component"
import { HomeComponent } from "./components/home/home.component"
import { LoginComponent } from "./components/login/login.component"
import { TablaPuestosComponent } from "./components/tabla-puestos/tabla-puestos.component"
import { IngresarDatosComponent } from "./components/ingresar-datos/ingresar-datos.component"

const routes: Routes = [
  { path: 'tabla', component: TablaComponent },
  { path: 'grafica', component: GraficasComponent},
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tablapos', component: TablaPuestosComponent},
  { path: 'ingresoDatos', component: IngresarDatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
