# PADRÃO OBSERVER

O código foi desenvolvido a partir do padrão de projeto Observer para gerenciar um relacionamento um-para-muitos, no qual um jogo possui muitos jogadores. Com este padrão, cria-se uma ligação leve (ou baixo acoplamento), tornando o código mais flexível e capaz de lidar com futuras mudanças sem afetar o Sujeito e o Observador.

---

No código, é necessário atualizar os jogadores sobre os eventos do jogo (ataque ou cura). Para isso, a classe Game (que implementa a interface Subject) notifica e atualiza o Player (que implementa a interface Observer) sobre a ocorrência de um evento no jogo.

A classe Game não precisa saber quantos jogadores existem, nem como cada um deles vai lidar com o dano ou cura recebida. Ela apenas informa sobre os eventos do jogo, chamando o método update() do Player. Por sua vez, o Player precisa apenas ser notificado sobre o que acontece no jogo para poder calcular seus HP (pontos de vida).

Esses são os principais benefícios do padrão Observer, tanto para o jogo criado quanto para outros códigos que buscam um design OO mais simples:

- A classe do Sujeito (Subject) não precisa saber o que as classes dos Observadores fazem.
- Pode-se adicionar e remover Observadores a qualquer momento, e, mesmo assim, o Sujeito continuará funcionando normalmente.
- O Sujeito nunca precisará ser modificado para acomodar novos tipos de Observador, desde que estes implementem a interface Observer.
- Podemos reutilizar Sujeitos e Observadores independentemente uns dos outros.
- Alterações no Sujeito ou em um Observador não afetarão o outro, devido à sua ligação leve, desde que continuem a cumprir suas obrigações de implementar suas interfaces.

**OBS.:** Fiz o trabalho individualmente, pois faltei no dia e não prestei atenção ao prazo, mas o próximo já está sendo feito em dupla.
---

**Referências Bibliográficas:**

**FREEMAN, Eric; FREEMAN, Elisabeth.** *Use a Cabeça! Padrões de Projetos*. 2. ed. Rio de Janeiro: Alta Books, 2009. 496 p.