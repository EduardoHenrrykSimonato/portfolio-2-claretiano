import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SessaoService, Perfil } from '../../services/sessao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private sessaoService: SessaoService
  ) { }

  ngOnInit() {
  }

  async entrar() {
    if (!this.usuario || !this.senha) {
      const toast = await this.toastController.create({
        message: 'Preencha usuário e senha para acessar o sistema.',
        duration: 3000,
        color: 'danger',
        position: 'top'
      });
      await toast.present();
      return;
    }
    const perfilPermitido = ['usuario', 'tecnico', 'administrador'];
    if (!perfilPermitido.includes(this.usuario)) {
      const toast = await this.toastController.create({
        message: 'Usuário inválido. Informe usuario, tecnico ou administrador.',
        duration: 3000,
        color: 'danger',
        position: 'top'
      });
      await toast.present();
      return;
    }

    // Salva na memória
    this.sessaoService.definirPerfil(this.usuario as Perfil);

    // Navega para o menu principal de forma síncrona
    this.router.navigateByUrl('/menu-principal', { replaceUrl: true });
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.entrar();
    }
  }
}
