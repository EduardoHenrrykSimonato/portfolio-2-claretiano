import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ChamadosService } from '../../services/chamados.service';
import { Chamado } from '../../models/chamado.model';

@Component({
  selector: 'app-atualizar-status',
  templateUrl: './atualizar-status.page.html',
  styleUrls: ['./atualizar-status.page.scss'],
})
export class AtualizarStatusPage implements OnInit {

  chamado: Chamado | undefined;
  
  // Variáveis desacopladas para o formulário
  novoStatus: Chamado['status'] = 'Aberto';
  novaObservacao: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chamadosService: ChamadosService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.chamado = this.chamadosService.buscarChamadoPorId(Number(idParam));
      if (this.chamado) {
        // Preenche o formulário com o estado atual
        this.novoStatus = this.chamado.status;
        this.novaObservacao = this.chamado.observacao || '';
      }
    }
  }

  async salvar() {
    if (!this.chamado) return;

    if (!this.novoStatus) {
      const toast = await this.toastController.create({
        message: 'O status é obrigatório.',
        duration: 2500,
        color: 'warning',
        position: 'top'
      });
      await toast.present();
      return;
    }

    // Regra de negócio: delega para o service alterar em memória
    this.chamadosService.atualizarStatus(this.chamado.id, this.novoStatus, this.novaObservacao);

    const toast = await this.toastController.create({
      message: 'Status atualizado com sucesso.',
      duration: 2500,
      color: 'success',
      position: 'top'
    });
    await toast.present();

    // Volta para Detalhes
    this.router.navigate(['/detalhes-chamado', this.chamado.id]);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const hasOverlay = document.querySelector('ion-alert, ion-action-sheet, ion-popover, ion-modal, ion-select-popover');
      if (hasOverlay) return;
      if (this.chamado && this.chamado.id) {
        this.router.navigate(['/detalhes-chamado', this.chamado.id]);
      } else {
        this.router.navigate(['/lista-chamados']);
      }
    }

    if (event.key === 'Enter') {
      const target = event.target as HTMLElement;
      if (target && (target.tagName.toLowerCase() === 'textarea' || target.tagName.toLowerCase() === 'ion-textarea')) return;
      this.salvar();
    }
  }
}
