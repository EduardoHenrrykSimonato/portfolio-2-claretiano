import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/**
 * AppModule - Módulo raiz da aplicação
 *
 * Importações fundamentais:
 *  - IonicModule: componentes visuais Ionic (IonButton, IonCard, etc.)
 *  - FormsModule: suporte a [(ngModel)] nos formulários
 *  - AppRoutingModule: configuração de rotas com lazy loading
 *
 * Services (ChamadosService e TecnicosService) são providedIn: 'root'
 * e não precisam ser declarados aqui.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot({
      mode: 'md'   // Material Design para aparência consistente
    }),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
