# Services e Regras de Negócio

Como exigido nas regras obrigatórias, a aplicação não possui banco de dados local ou remoto. Todo estado é gerenciado no Angular por meio de **Services (Singletons)** injetados no Root.

## Regras de Estado
1. Os dados devem residir em variáveis de classe privadas do tipo Array dentro de um service (ex: `private chamados: Chamado[] = []` e `private tecnicos: Tecnico[] = []`).
2. O service deve ser a **única fonte de dados**. Nenhuma tela deve criar array próprio de chamados ou técnicos.
3. Se o app recarregar (F5 ou fechar/abrir processo mobile), é aceitável e esperado que os dados se percam e reiniciem vazios.
4. Todo chamado novo deve iniciar com status "Aberto", salvo se informado de forma controlada.

## ChamadosService (`src/app/services/chamados.service.ts`)
É o único service que centraliza tanto chamados quanto técnicos.

Métodos obrigatórios:
- `listarChamados()`
- `adicionarChamado(chamado)`
- `buscarChamadoPorId(id)`
- `excluirChamado(id)`
- `atualizarStatus(id, status, observacao)`
- `listarTecnicos()`
- `adicionarTecnico(tecnico)`
- `excluirTecnico(id)`
- `gerarIdChamado()`
- `gerarIdTecnico()`
- `listarTecnicosAtivos()`
- `calcularResumoChamados()`
