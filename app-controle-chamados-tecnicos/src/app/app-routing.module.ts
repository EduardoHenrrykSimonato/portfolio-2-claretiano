import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-chamado',
    loadChildren: () => import('./pages/cadastro-chamado/cadastro-chamado.module').then( m => m.CadastroChamadoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lista-chamados',
    loadChildren: () => import('./pages/lista-chamados/lista-chamados.module').then( m => m.ListaChamadosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalhes-chamado/:id',
    loadChildren: () => import('./pages/detalhes-chamado/detalhes-chamado.module').then( m => m.DetalhesChamadoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'atualizar-status/:id',
    loadChildren: () => import('./pages/atualizar-status/atualizar-status.module').then( m => m.AtualizarStatusPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-tecnico',
    loadChildren: () => import('./pages/cadastro-tecnico/cadastro-tecnico.module').then( m => m.CadastroTecnicoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lista-tecnicos',
    loadChildren: () => import('./pages/lista-tecnicos/lista-tecnicos.module').then( m => m.ListaTecnicosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'resumo-chamados',
    loadChildren: () => import('./pages/resumo-chamados/resumo-chamados.module').then( m => m.ResumoChamadosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
