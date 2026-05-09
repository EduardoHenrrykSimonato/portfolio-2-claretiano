# Modelo de Dados (Interfaces)

A aplicação trabalha apenas com dados em memória (arrays). Para garantir a integridade via TypeScript, foram definidos os seguintes modelos na pasta `src/app/models/`.

## Chamado (`chamado.model.ts`)
Representa um chamado de suporte/técnico.

```typescript
export interface Chamado {
  id: number;
  solicitante: string;
  setor: string;
  titulo: string;
  descricao: string;
  prioridade: 'Baixa' | 'Média' | 'Alta' | 'Urgente';
  dataAbertura: string;
  tecnico: string;
  status: 'Aberto' | 'Em atendimento' | 'Concluído' | 'Cancelado';
  observacao: string;
}
```

## Tecnico (`tecnico.model.ts`)
Representa o funcionário técnico disponível para assumir chamados.

```typescript
export interface Tecnico {
  id: number;
  nome: string;
  especialidade: 'Hardware' | 'Software' | 'Rede' | 'Impressora' | 'Sistema interno' | 'Outros';
  contato: string;
  situacao: 'Ativo' | 'Inativo';
}
```
