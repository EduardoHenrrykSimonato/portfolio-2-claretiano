# Instruções para IAs (Modelos de Linguagem)

**ATENÇÃO: LEIA ISTO ANTES DE QUALQUER ALTERAÇÃO**

Este projeto é **exclusivamente acadêmico** e possui regras rigorosas que não podem ser violadas. Qualquer IA que for interagir com este código deve seguir estritamente as diretrizes abaixo:

1. **Leia toda a documentação**: Antes de sugerir ou criar código, consulte os arquivos da pasta `/docs`. Eles contêm a arquitetura, regras e estado atual do projeto.
2. **NÃO crie ou sugira banco de dados**: O uso de bancos reais ou locais (SQLite, Firebase, PostgreSQL, MongoDB, etc.) é expressamente proibido.
3. **NÃO use LocalStorage ou APIs externas**: Os dados só existem durante a execução, mantidos **apenas em memória** via arrays nos `Services` do Angular.
4. **Respeite o escopo das telas**: O projeto possui um número fechado de 10 telas. Não crie telas adicionais que fujam do escopo.
5. **Comunicação entre telas**: Deve ser feita sempre via Injeção de Dependência dos Services.
6. **Mantenha o padrão Ionic/Angular**: Use componentes nativos do Ionic (`ion-card`, `ion-button`, `ion-item`, etc.), navegação via Angular Router e formulários via `ngModel`.

Seu objetivo como IA é atuar como um Desenvolvedor Sênior Ionic/Angular focado em manter o código limpo, comentado e dentro destas regras restritas.
