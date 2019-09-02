import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes
import {InicioComponent} from './componentes/inicio/inicio.component';
import {MainComponent} from './componentes/main/main.component';
import {PerfilComponent} from './componentes/perfil/perfil.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'main', component: MainComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
