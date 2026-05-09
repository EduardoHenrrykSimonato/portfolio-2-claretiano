import { Injectable } from '@angular/core';
import { Chamado } from '../models/chamado.model';
import { Tecnico } from '../models/tecnico.model';

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  private chamados: Chamado[] = [];
  private tecnicos: Tecnico[] = [];

  constructor() {
    // Dados de demonstração para facilitar avaliação acadêmica
    this.tecnicos = [
      { id: 1, nome: 'Carlos Técnico', especialidade: 'Hardware', contato: 'carlos@email.com', situacao: 'Ativo' },
      { id: 2, nome: 'Ana Suporte', especialidade: 'Software', contato: 'ana@email.com', situacao: 'Ativo' }
    ];
    this.chamados = [
      {
        id: 1,
        solicitante: 'João Silva',
        setor: 'Financeiro',
        titulo: 'Computador não liga',
        descricao: 'O computador do setor financeiro não está ligando desde esta manhã.',
        prioridade: 'Alta',
        dataAbertura: new Date().toISOString(),
        tecnico: 'Carlos Técnico',
        status: 'Aberto',
        observacao: ''
      },
      {
        id: 2,
        solicitante: 'Maria Souza',
        setor: 'RH',
        titulo: 'Impressora sem conexão',
        descricao: 'A impressora do setor de RH perdeu a conexão com a rede.',
        prioridade: 'Média',
        dataAbertura: new Date().toISOString(),
        tecnico: 'Ana Suporte',
        status: 'Em atendimento',
        observacao: 'Verificando configurações de rede.'
      }
    ];
  }

  gerarIdChamado(): number {
    return this.chamados.length > 0 ? Math.max(...this.chamados.map(c => c.id)) + 1 : 1;
  }

  gerarIdTecnico(): number {
    return this.tecnicos.length > 0 ? Math.max(...this.tecnicos.map(t => t.id)) + 1 : 1;
  }

  listarChamados(): Chamado[] {
    return this.chamados;
  }

  adicionarChamado(chamado: Chamado): void {
    if (!chamado.id) {
      chamado.id = this.gerarIdChamado();
    }
    // Todo chamado novo deve iniciar com status "Aberto", salvo se informado de forma controlada.
    if (!chamado.status) {
      chamado.status = 'Aberto';
    }
    if (!chamado.dataAbertura) {
      chamado.dataAbertura = new Date().toISOString();
    }
    this.chamados.push(chamado);
  }

  buscarChamadoPorId(id: number): Chamado | undefined {
    return this.chamados.find(c => c.id === id);
  }

  excluirChamado(id: number): void {
    this.chamados = this.chamados.filter(c => c.id !== id);
  }

  atualizarStatus(id: number, status: Chamado['status'], observacao: string): void {
    const chamado = this.buscarChamadoPorId(id);
    if (chamado) {
      chamado.status = status;
      chamado.observacao = observacao;
    }
  }

  listarTecnicos(): Tecnico[] {
    return this.tecnicos;
  }

  listarTecnicosAtivos(): Tecnico[] {
    return this.tecnicos.filter(t => t.situacao === 'Ativo');
  }

  adicionarTecnico(tecnico: Tecnico): void {
    if (!tecnico.id) {
      tecnico.id = this.gerarIdTecnico();
    }
    this.tecnicos.push(tecnico);
  }

  excluirTecnico(id: number): void {
    this.tecnicos = this.tecnicos.filter(t => t.id !== id);
  }

  calcularResumoChamados(): { total: number; abertos: number; emAtendimento: number; concluidos: number; cancelados: number } {
    return {
      total: this.chamados.length,
      abertos: this.chamados.filter(c => c.status === 'Aberto').length,
      emAtendimento: this.chamados.filter(c => c.status === 'Em atendimento').length,
      concluidos: this.chamados.filter(c => c.status === 'Concluído').length,
      cancelados: this.chamados.filter(c => c.status === 'Cancelado').length
    };
  }
}
