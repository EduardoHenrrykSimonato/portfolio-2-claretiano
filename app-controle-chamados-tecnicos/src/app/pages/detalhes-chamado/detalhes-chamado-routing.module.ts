import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesChamadoPage } from './detalhes-chamado.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesChamadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesChamadoPageRoutingModule {}
