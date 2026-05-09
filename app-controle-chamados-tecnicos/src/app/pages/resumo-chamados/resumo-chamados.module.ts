import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResumoChamadosPageRoutingModule } from './resumo-chamados-routing.module';
import { ResumoChamadosPage } from './resumo-chamados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumoChamadosPageRoutingModule
  ],
  declarations: [ResumoChamadosPage]
})
export class ResumoChamadosPageModule {}
