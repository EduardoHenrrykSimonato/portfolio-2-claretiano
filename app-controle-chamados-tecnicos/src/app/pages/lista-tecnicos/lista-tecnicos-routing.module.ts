import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTecnicosPage } from './lista-tecnicos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaTecnicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTecnicosPageRoutingModule {}
