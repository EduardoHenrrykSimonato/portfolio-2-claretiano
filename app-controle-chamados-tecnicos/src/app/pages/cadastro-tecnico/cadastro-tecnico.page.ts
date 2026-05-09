import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ChamadosService } from '../../services/chamados.service';
import { Tecnico } from '../../models/tecnico.model';

@Component({
  selector: 'app-cadastro-tecnico',
  templateUrl: './cadastro-tecnico.page.html',
  styleUrls: ['./cadastro-tecnico.page.scss'],
})
export class CadastroTecnicoPage implements OnInit {

  tecnico: Partial<Tecnico> = this.getTencnicoInicial();

  constructor(
    private chamadosService: ChamadosService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private getTencnicoInicial(): Partial<Tecnico> {
    return {
      nome: '',
      especialidade: undefined,
      contato: '',
      situacao: 'Ativo'
    };
  }

  async salvar() {
    if (!this.tecnico.nome || !this.tecnico.nome.trim()) {
      return this.exibirMensagem('Preencha o nome do técnico.', 'warning');
    }
    if (!this.tecnico.especialidade) {
      return this.exibirMensagem('Selecione a especialidade do técnico.', 'warning');
    }
    if (!this.tecnico.contato || !this.tecnico.contato.trim()) {
      return this.exibirMensagem('Preencha o contato do técnico.', 'warning');
    }

    const novoTecnico: Tecnico = {
      id: 0, 
      nome: this.tecnico.nome,
      especialidade: this.tecnico.especialidade,
      contato: this.tecnico.contato,
      situacao: this.tecnico.situacao || 'Ativo'
    };

    // A regra de negócio: não usar array na tela, só o Service. O ID é gerado lá dentro.
    this.chamadosService.adicionarTecnico(novoTecnico);

    this.tecnico = this.getTencnicoInicial();

    this.exibirMensagem('Técnico cadastrado com sucesso.', 'success');
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
