import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaTecnicosPageRoutingModule } from './lista-tecnicos-routing.module';
import { ListaTecnicosPage } from './lista-tecnicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTecnicosPageRoutingModule
  ],
  declarations: [ListaTecnicosPage]
})
export class ListaTecnicosPageModule {}
