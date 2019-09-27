import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MainComponent } from './componentes/main/main.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PublicacionService } from './shared/publicacion.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MainComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [InicioComponent, AppComponent, PublicacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
