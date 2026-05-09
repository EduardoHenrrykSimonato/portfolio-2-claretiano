import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ChamadosService } from '../../services/chamados.service';
import { Chamado } from '../../models/chamado.model';
import { Tecnico } from '../../models/tecnico.model';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.page.html',
  styleUrls: ['./cadastro-chamado.page.scss'],
})
export class CadastroChamadoPage implements OnInit {

  chamado: Partial<Chamado> = this.getChamadoInicial();

  constructor(
    private chamadosService: ChamadosService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Getter para a lista de técnicos ativos da memória
  get tecnicosAtivos(): Tecnico[] {
    return this.chamadosService.listarTecnicosAtivos();
  }

  private getChamadoInicial(): Partial<Chamado> {
    const hoje = new Date();
    const dataStr = hoje.toISOString().split('T')[0];

    return {
      solicitante: '',
      setor: '',
      titulo: '',
      descricao: '',
      prioridade: undefined,
      dataAbertura: dataStr,
      tecnico: '',
      status: 'Aberto',
      observacao: ''
    };
  }

  async salvar() {
    if (!this.chamado.solicitante || !this.chamado.solicitante.trim()) {
      return this.exibirMensagem('Preencha o nome do solicitante.', 'warning');
    }
    if (!this.chamado.titulo || !this.chamado.titulo.trim()) {
      return this.exibirMensagem('Preencha o título do chamado.', 'warning');
    }
    if (!this.chamado.descricao || !this.chamado.descricao.trim()) {
      return this.exibirMensagem('Preencha a descrição do problema.', 'warning');
    }
    if (!this.chamado.prioridade) {
      return this.exibirMensagem('Selecione a prioridade.', 'warning');
    }
    if (!this.chamado.tecnico || !this.chamado.tecnico.trim()) {
      return this.exibirMensagem('Informe ou selecione o técnico responsável.', 'warning');
    }

    const novoChamado: Chamado = {
      id: 0,
      solicitante: this.chamado.solicitante,
      setor: this.chamado.setor || '',
      titulo: this.chamado.titulo,
      descricao: this.chamado.descricao,
      prioridade: this.chamado.prioridade,
      dataAbertura: this.chamado.dataAbertura || new Date().toISOString().split('T')[0],
      tecnico: this.chamado.tecnico,
      status: 'Aberto', // Sempre inicia como Aberto por regra
      observacao: this.chamado.observacao || ''
    };

    // A regra de negócio: salvar no service para obter ID
    this.chamadosService.adicionarChamado(novoChamado);

    this.exibirMensagem('Chamado cadastrado com sucesso.', 'success');
    
    // Navega para a lista de chamados conforme requerido
    this.router.navigate(['/lista-chamados']);
    
    // Opcional: Limpa o form após a navegação para não deixar lixo na memória da classe
    this.chamado = this.getChamadoInicial();
  }

  private async exibirMensagem(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000,
      color: cor,
      position: 'top'
    });
    await toast.present();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const hasOverlay = document.querySelector('ion-alert, ion-action-sheet, ion-popover, ion-modal, ion-select-popover');
      if (hasOverlay) return;
      this.router.navigate(['/menu-principal']);
    }

    if (event.key === 'Enter') {
      const target = event.target as HTMLElement;
      if (target && (target.tagName.toLowerCase() === 'textarea' || target.tagName.toLowerCase() === 'ion-textarea')) return;
      this.salvar();
    }
  }
}
