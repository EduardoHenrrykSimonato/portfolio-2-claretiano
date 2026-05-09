# Padrão de Telas

O projeto prevê exatamente **10 telas obrigatórias**. Nenhuma tela extra deve ser adicionada fora deste escopo.

### 1. Login
* Tela inicial da aplicação.
* Campos (fictícios/mock): Email, Senha. Botão de "Entrar".
* Redireciona para o Menu Principal após submissão do formulário.

### 2. Menu Principal (Dashboard de Navegação)
* Ponto central contendo links ou botões grandes em grid (ou lista) para acesso às demais áreas.
* Opções: "Chamados", "Técnicos", "Resumo", "Sobre" e "Sair".

### 3. Cadastro de Chamado
* Formulário utilizando `ngModel`.
* Campos: Título, Descrição, Prioridade, Técnico (opcional no cadastro).
* Ação: Salva no service e redireciona.

### 4. Lista de Chamados
* Exibe todos os chamados salvos no array em memória.
* `<ion-list>` com itens clicáveis. O item deve mostrar título, status (colorido) e técnico associado.
* Botão Flutuante (FAB) para criar novo chamado.

### 5. Detalhes do Chamado
* Tela que detalha um chamado clicado na lista.
* Exibe título, descrição completa, data, técnico e botões de ação (excluir, alterar status).

### 6. Atualização de Status
* Pode ser uma tela dedicada ou um Modal/Action Sheet acionado na tela de Detalhes.
* Permite mudar o status (Aberto, Em andamento, Resolvido, Cancelado) e vincular a um Técnico.

### 7. Cadastro de Técnico
* Formulário simples.
* Campos: Nome, Especialidade, Contato.

### 8. Lista de Técnicos
* Listagem dos técnicos registrados.
* Exibição visual limpa indicando o nome e especialidade.

### 9. Resumo dos Chamados
* Uma tela de "Relatório" simplificado.
* Exibe contadores: Total de chamados, Quantos abertos, Quantos resolvidos, etc.
* Calculado de forma dinâmica buscando as informações do array do service.

### 10. Sobre o Aplicativo
* Página estática de informações.
* Exibe detalhes da disciplina acadêmica, nome do aluno(a)/desenvolvedor e tecnologias utilizadas.
