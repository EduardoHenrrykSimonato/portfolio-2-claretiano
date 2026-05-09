import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumoChamadosPage } from './resumo-chamados.page';

const routes: Routes = [
  {
    path: '',
    component: ResumoChamadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumoChamadosPageRoutingModule {}
