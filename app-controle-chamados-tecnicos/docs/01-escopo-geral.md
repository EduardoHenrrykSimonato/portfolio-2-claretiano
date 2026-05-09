# Escopo Geral do Projeto

## Projeto
**App de Controle de Chamados Técnicos**

## Tecnologia
* **Framework Mobile:** Ionic Framework
* **Framework JS:** Angular
* **Linguagem principal:** TypeScript
* **Estruturação Visual:** HTML e SCSS

## Objetivo
Desenvolver um aplicativo mobile para controle de chamados técnicos, permitindo cadastro, listagem, acompanhamento, atualização de status e resumo dos chamados de forma simplificada e direta.

## Regras Obrigatórias
* **Não usar banco de dados.**
* **Não usar API externa.**
* **Não usar Firebase.**
* **Não usar SQLite.**
* **Não usar LocalStorage.**
* Armazenar dados **apenas em arrays** dentro de um service Angular.
* Compartilhar dados entre telas por meio da injeção deste service.
* Utilizar formulários baseados em Template (com `ngModel`).
* Utilizar navegação nativa com **Angular Router**.
* Utilizar estritamente os **componentes visuais do Ionic** (UI components).
* Código deve ser organizado e comentado quando necessário.
* A interface deve ser focada e adequada para **dispositivos mobile**.

## Atores
* **Usuário:** Aquele que abre o chamado.
* **Técnico:** Aquele que é designado e resolve o chamado.
* **Administrador:** Aquele que visualiza resumos e cadastra técnicos.
*(Nota: Devido à ausência de backend, esses papéis são representações conceituais para a divisão das telas, sem necessidade de regras complexas de auth baseada em roles neste momento)*.

## Casos de Uso
1. Realizar Login
2. Cadastrar Chamado
3. Listar Chamados
4. Visualizar Detalhes do Chamado
5. Atualizar Status do Chamado
6. Cadastrar Técnico
7. Listar Técnicos
8. Visualizar Resumo dos Chamados
9. Visualizar Sobre o Aplicativo
10. Encerrar Sessão
