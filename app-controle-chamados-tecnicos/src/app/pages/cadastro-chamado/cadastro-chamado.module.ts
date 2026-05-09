import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroChamadoPageRoutingModule } from './cadastro-chamado-routing.module';
import { CadastroChamadoPage } from './cadastro-chamado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroChamadoPageRoutingModule
  ],
  declarations: [CadastroChamadoPage]
})
export class CadastroChamadoPageModule {}
