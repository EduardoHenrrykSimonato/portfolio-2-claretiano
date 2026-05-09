import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AtualizarStatusPageRoutingModule } from './atualizar-status-routing.module';
import { AtualizarStatusPage } from './atualizar-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarStatusPageRoutingModule
  ],
  declarations: [AtualizarStatusPage]
})
export class AtualizarStatusPageModule {}
