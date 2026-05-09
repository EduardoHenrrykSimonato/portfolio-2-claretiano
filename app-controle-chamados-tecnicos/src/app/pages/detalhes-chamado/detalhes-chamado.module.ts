import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalhesChamadoPageRoutingModule } from './detalhes-chamado-routing.module';
import { DetalhesChamadoPage } from './detalhes-chamado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesChamadoPageRoutingModule
  ],
  declarations: [DetalhesChamadoPage]
})
export class DetalhesChamadoPageModule {}
