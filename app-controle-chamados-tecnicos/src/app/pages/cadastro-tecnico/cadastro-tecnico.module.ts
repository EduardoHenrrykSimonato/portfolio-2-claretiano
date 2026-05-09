import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroTecnicoPageRoutingModule } from './cadastro-tecnico-routing.module';
import { CadastroTecnicoPage } from './cadastro-tecnico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroTecnicoPageRoutingModule
  ],
  declarations: [CadastroTecnicoPage]
})
export class CadastroTecnicoPageModule {}
