# Fluxo do Aplicativo

A navegação da aplicação deve ser fluida e seguir o Angular Router (`@angular/router`).

## Fluxo Principal de Autenticação
* **Entrada:** `Login`
* **Sucesso:** `Login` > Redireciona para `Menu Principal`
* **Sair:** A partir de qualquer tela com botão de saída ou do `Menu Principal` > `Encerrar Sessão` > Retorna ao `Login`.

## Fluxo de Menu (A partir do Menu Principal)
O Menu é o hub. O usuário pode tocar em opções para ir para as rotas:
1. > `Cadastrar Chamado`
2. > `Lista de Chamados`
3. > `Cadastrar Técnico`
4. > `Lista de Técnicos`
5. > `Resumo dos Chamados`
6. > `Sobre o Aplicativo`

## Fluxo do Domínio de Chamados
* `Menu Principal` > Toca em `Cadastrar Chamado` > Salva > Redirecionado para `Lista de Chamados`.
* `Menu Principal` > Toca em `Lista de Chamados` > Toca em um item > Redirecionado para `Detalhes do Chamado`.
* Dentro de `Detalhes do Chamado` > O usuário pode ver a opção de `Atualizar Status` > Modifica > Volta aos Detalhes ou Lista.

## Fluxo do Domínio de Técnicos
* `Menu Principal` > Toca em `Cadastrar Técnico` > Salva > Redirecionado para `Lista de Técnicos`.
* `Menu Principal` > Toca em `Lista de Técnicos` > (Apenas visualização do catálogo).
