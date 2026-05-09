import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChamadosService } from '../../services/chamados.service';
import { Chamado } from '../../models/chamado.model';

@Component({
  selector: 'app-detalhes-chamado',
  templateUrl: './detalhes-chamado.page.html',
  styleUrls: ['./detalhes-chamado.page.scss'],
})
export class DetalhesChamadoPage implements OnInit {

  chamado: Chamado | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chamadosService: ChamadosService
  ) { }

  ngOnInit() {
  }

  // Utilizar o lifecycle hook do Ionic garante que os dados recarreguem ao voltar
  ionViewWillEnter() {
    this.carregarChamado();
  }

  carregarChamado() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.chamado = this.chamadosService.buscarChamadoPorId(Number(idParam));
    }
  }

  irParaAtualizacao() {
    if (this.chamado) {
      this.router.navigate(['/atualizar-status', this.chamado.id]);
    }
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
      this.router.navigate(['/lista-chamados']);
    }
  }
}
