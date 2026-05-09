import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ChamadosService } from '../../services/chamados.service';
import { Chamado } from '../../models/chamado.model';

@Component({
  selector: 'app-lista-chamados',
  templateUrl: './lista-chamados.page.html',
  styleUrls: ['./lista-chamados.page.scss'],
})
export class ListaChamadosPage implements OnInit {

  constructor(
    private chamadosService: ChamadosService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  // A regra de negócio: não usar array na tela. 
  // O getter aponta diretamente para o array na memória do Service.
  get chamados(): Chamado[] {
    return this.chamadosService.listarChamados();
  }

  abrirDetalhes(id: number) {
    this.router.navigate(['/detalhes-chamado', id]);
  }

  async confirmarExclusao(chamado: Chamado, event: Event) {
    // Impede que o clique no botão de excluir ative também a navegação do card inteiro
    event.stopPropagation();
    
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: `Deseja realmente excluir o chamado <strong>#${chamado.id} - ${chamado.titulo}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          cssClass: 'danger',
          handler: () => {
            this.excluir(chamado.id);
          }
        }
      ]
    });

    await alert.present();
  }

  excluir(id: number) {
    this.chamadosService.excluirChamado(id);
    this.exibirMensagem('Chamado excluído com sucesso!');
  }

  async exibirMensagem(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }

  getCorPrioridade(prioridade: string): string {
    switch (prioridade) {
      case 'Baixa': return 'success';
      case 'Média': return 'warning';
      case 'Alta': return 'danger';
      case 'Urgente': return 'dark';
      default: return 'medium';
    }
  }

  getCorStatus(status: string): string {
    switch (status) {
      case 'Aberto': return 'primary';
      case 'Em atendimento': return 'warning';
      case 'Concluído': return 'success';
      case 'Cancelado': return 'danger';
      default: return 'medium';
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const hasOverlay = document.querySelector('ion-alert, ion-action-sheet, ion-popover, ion-modal, ion-select-popover');
      if (hasOverlay) return;
      this.router.navigate(['/menu-principal']);
    }
  }
}
