import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessaoService } from '../services/sessao.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private sessaoService: SessaoService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    
    const perfil = this.sessaoService.obterPerfil();
    
    // Se não houver perfil logado, vai pro login
    if (!perfil) {
      this.router.navigate(['/login']);
      return false;
    }

    // Se houver perfil, verifica a permissão para a rota específica
    // Removemos possíveis parâmetros da URL para verificação básica (ex: /detalhes-chamado/1 -> /detalhes-chamado)
    // No caso do nosso service de sessão, ele já verifica se startsWith para rotas com ID.
    // Então passamos a URL completa do state.
    const url = state.url.split('?')[0]; // Remove query params se existirem

    if (!this.sessaoService.temPermissao(url)) {
      const toast = await this.toastController.create({
        message: 'Você não tem permissão para acessar esta tela.',
        duration: 3000,
        color: 'danger',
        position: 'top'
      });
      await toast.present();
      
      this.router.navigate(['/menu-principal']);
      return false;
    }

    return true;
  }
}
