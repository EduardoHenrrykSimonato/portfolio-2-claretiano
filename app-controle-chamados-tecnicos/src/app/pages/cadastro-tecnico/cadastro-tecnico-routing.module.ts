import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroTecnicoPage } from './cadastro-tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroTecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroTecnicoPageRoutingModule {}
