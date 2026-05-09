import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarStatusPage } from './atualizar-status.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarStatusPageRoutingModule {}
