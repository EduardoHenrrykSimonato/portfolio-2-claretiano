import { Injectable } from '@angular/core';
import { Tecnico } from '../models/tecnico.model';

/**
 * Service: TecnicosService
 * -------------------------
 * Responsável por gerenciar o cadastro de técnicos.
 * IMPORTANTE: Todos os dados são mantidos APENAS EM MEMÓRIA
 * através do array privado `tecnicos`. Nenhum banco de dados,
 * API externa, Firebase ou LocalStorage é utilizado.
 *
 * Métodos principais:
 *  - listarTecnicos()
 *  - buscarPorId()
 *  - adicionarTecnico()
 *  - atualizarTecnico()
 *  - excluirTecnico()
 */
@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  // Contador para geração de IDs únicos
  private proximoId: number = 1;

  // Array em memória — única fonte de dados da aplicação
  private tecnicos: Tecnico[] = [
    {
      id: this.proximoId++,
      nome: 'Carlos Eduardo Silva',
      especialidade: 'Redes e Infraestrutura',
      telefone: '(11) 98765-4321',
      email: 'carlos.silva@empresa.com',
      ativo: true
    },
    {
      id: this.proximoId++,
      nome: 'Ana Paula Costa',
      especialidade: 'Hardware e Manutenção',
      telefone: '(11) 97654-3210',
      email: 'ana.costa@empresa.com',
      ativo: true
    },
    {
      id: this.proximoId++,
      nome: 'Roberto Ferreira',
      especialidade: 'Software e Sistemas',
      telefone: '(11) 96543-2109',
      email: 'roberto.ferreira@empresa.com',
      ativo: false
    }
  ];

  constructor() {}

  /**
   * Lista todos os técnicos em memória.
   * @returns Cópia do array de técnicos
   */
  listarTecnicos(): Tecnico[] {
    return [...this.tecnicos];
  }

  /**
   * Lista apenas técnicos ativos.
   * Útil para selects em formulários de chamados.
   */
  listarTecnicosAtivos(): Tecnico[] {
    return this.tecnicos.filter(t => t.ativo);
  }

  /**
   * Busca um técnico pelo seu ID único.
   * @param id - ID do técnico
   * @returns Técnico encontrado ou undefined
   */
  buscarPorId(id: number): Tecnico | undefined {
    return this.tecnicos.find(t => t.id === id);
  }

  /**
   * Adiciona um novo técnico ao array em memória.
   * O ID é gerado automaticamente (auto-incremento).
   * @param dados - Dados do técnico sem o ID
   * @returns O técnico recém-criado com ID atribuído
   */
  adicionarTecnico(dados: Omit<Tecnico, 'id'>): Tecnico {
    const novoTecnico: Tecnico = {
      ...dados,
      id: this.proximoId++
    };
    this.tecnicos.push(novoTecnico);
    return novoTecnico;
  }

  /**
   * Atualiza os dados de um técnico existente.
   * @param id - ID do técnico
   * @param dados - Novos dados (parcial)
   * @returns true se atualizado, false se não encontrado
   */
  atualizarTecnico(id: number, dados: Partial<Tecnico>): boolean {
    const index = this.tecnicos.findIndex(t => t.id === id);
    if (index === -1) return false;

    this.tecnicos[index] = {
      ...this.tecnicos[index],
      ...dados,
      id // garante que o ID não seja alterado
    };
    return true;
  }

  /**
   * Remove um técnico do array em memória.
   * @param id - ID do técnico a excluir
   * @returns true se removido, false se não encontrado
   */
  excluirTecnico(id: number): boolean {
    const index = this.tecnicos.findIndex(t => t.id === id);
    if (index === -1) return false;

    this.tecnicos.splice(index, 1);
    return true;
  }
}
