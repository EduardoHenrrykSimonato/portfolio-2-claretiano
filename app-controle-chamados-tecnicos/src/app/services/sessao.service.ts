import { Injectable } from '@angular/core';

export type Perfil = 'usuario' | 'tecnico' | 'administrador' | null;

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  private perfilLogado: Perfil = null;

  constructor() { }

  definirPerfil(perfil: Perfil) {
    this.perfilLogado = perfil;
  }

  obterPerfil(): Perfil {
    return this.perfilLogado;
  }

  limparSessao() {
    this.perfilLogado = null;
  }

  isUsuario(): boolean {
    return this.perfilLogado === 'usuario';
  }

  isTecnico(): boolean {
    return this.perfilLogado === 'tecnico';
  }

  isAdministrador(): boolean {
    return this.perfilLogado === 'administrador';
  }

  temPermissao(rota: string): boolean {
    if (!this.perfilLogado) return false;
    
    // administrador acessa tudo
    if (this.perfilLogado === 'administrador') return true;

    // rotas permitidas para usuario
    if (this.perfilLogado === 'usuario') {
      const permitidas = [
        '/menu-principal',
        '/cadastro-chamado',
        '/lista-chamados',
        '/resumo-chamados',
        '/sobre'
      ];
      if (permitidas.includes(rota)) return true;
      if (rota.startsWith('/detalhes-chamado')) return true;
      return false;
    }

    // rotas permitidas para tecnico
    if (this.perfilLogado === 'tecnico') {
      const permitidas = [
        '/menu-principal',
        '/lista-chamados',
        '/sobre'
      ];
      if (permitidas.includes(rota)) return true;
      if (rota.startsWith('/detalhes-chamado')) return true;
      if (rota.startsWith('/atualizar-status')) return true;
      return false;
    }

    return false;
  }
}
