import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ChamadosService } from '../../services/chamados.service';
import { Tecnico } from '../../models/tecnico.model';

@Component({
  selector: 'app-lista-tecnicos',
  templateUrl: './lista-tecnicos.page.html',
  styleUrls: ['./lista-tecnicos.page.scss'],
})
export class ListaTecnicosPage implements OnInit {

  constructor(
    private chamadosService: ChamadosService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // A regra de negócio: não usar array na tela. 
  // O getter aponta diretamente para o array na memória do Service.
  get tecnicos(): Tecnico[] {
    return this.chamadosService.listarTecnicos();
  }

  async confirmarExclusao(tecnico: Tecnico) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: `Deseja realmente excluir o técnico <strong>${tecnico.nome}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          cssClass: 'danger',
          handler: () => {
            this.excluir(tecnico.id);
          }
        }
      ]
    });

    await alert.present();
  }

  excluir(id: number) {
    this.chamadosService.excluirTecnico(id);
    this.exibirMensagem('Técnico excluído com sucesso!');
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

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const hasOverlay = document.querySelector('ion-alert, ion-action-sheet, ion-popover, ion-modal, ion-select-popover');
      if (hasOverlay) return;
      this.router.navigate(['/menu-principal']);
    }
  }
}
