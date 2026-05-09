import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ChamadosService } from '../../services/chamados.service';

@Component({
  selector: 'app-resumo-chamados',
  templateUrl: './resumo-chamados.page.html',
  styleUrls: ['./resumo-chamados.page.scss'],
})
export class ResumoChamadosPage implements OnInit {

  constructor(
    private chamadosService: ChamadosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Obter o total de chamados para verificar se exibimos o empty state
  get total(): number {
    return this.chamadosService.listarChamados().length;
  }

  // Utilizamos o método do service conforme a requisição
  get resumoStatus() {
    return this.chamadosService.calcularResumoChamados();
  }

  // Calculamos a prioridade on-the-fly lendo os dados em memória sem array estático
  get resumoPrioridade() {
    const chamados = this.chamadosService.listarChamados();
    return {
      baixa: chamados.filter(c => c.prioridade === 'Baixa').length,
      media: chamados.filter(c => c.prioridade === 'Média').length,
      alta: chamados.filter(c => c.prioridade === 'Alta').length,
      urgente: chamados.filter(c => c.prioridade === 'Urgente').length
    };
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
