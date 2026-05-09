# Padrão Visual

O aplicativo deve possuir um padrão visual limpo, moderno e organizado, focado em dispositivos móveis e seguindo um estilo profissional ideal para controle de chamados técnicos.

## Diretrizes UI/UX

1. **Design Mobile-First:** 
   - A interface deve ter um layout responsivo focado no celular.
   - Botões devem ser grandes, bem espaçados e fáceis de tocar.
   - Mantenha o mesmo padrão em todas as telas, evitando telas poluídas.
   - Use textos claros e objetivos.

2. **Componentes Estruturais (Ionic):**
   - Use `<ion-header>`, `<ion-toolbar>`, `<ion-title>` e `<ion-content>` como a base obrigatória para todas as telas (Cabeçalho com título da tela).
   - Use botão de voltar (`<ion-back-button>`) no cabeçalho quando necessário.

3. **Layout e Organização:**
   - Use `<ion-card>` para envolver blocos principais (formulários ou resumos).
   - Cards devem ter bordas arredondadas para um visual moderno.

4. **Formulários:**
   - Todo conteúdo de formulário deve estar dentro de um `<ion-card>`.
   - Use `<ion-input>`, `<ion-textarea>`, e `<ion-select>` para a entrada de dados.
   - Use `<ion-button>` no final do formulário como botão principal de ação.

5. **Listagens:**
   - Use `<ion-list>`, `<ion-item>` e `<ion-label>` nas listagens de dados.
   - Use `<ion-badge>` para destacar status e prioridade visualmente.

6. **Notificações e Mensagens:**
   - Utilize `<ion-alert>` ou `<ion-toast>` para feedback de ações (sucesso, erro, confirmações).

## Orientação para Novas Telas
Para garantir a consistência, toda nova tela criada **deve obrigatoriamente** seguir este checklist visual:
- [ ] Cabeçalho com o título da tela explícito (`ion-header` > `ion-toolbar` > `ion-title`).
- [ ] Conteúdo principal encapsulado dentro de `ion-card` (especialmente para formulários e resumos).
- [ ] Botão principal de ação posicionado no final do formulário.
- [ ] Botão de voltar configurado no cabeçalho quando for uma tela de fluxo interno.
- [ ] Feedbacks de ação implementados com `ion-alert` ou `ion-toast`.
- [ ] Uso de `ion-badge` para identificação visual rápida de status/prioridade nas listas.
