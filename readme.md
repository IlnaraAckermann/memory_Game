# 🎮 Projeto: Jogo da Memória 🧠🃏

## Objetivo
Criar um jogo da memória em JavaScript puro, usando os conceitos básicos de HTML, CSS e JavaScript.

## Requisitos
- O jogo deve ter um tabuleiro com 16 cartas, cada uma com um par.
- Encontrar os pares de cartas virando duas cartas de cada vez.
- Remover as cartas se forem iguais; se não, virá-las novamente.
- Terminar o jogo quando todas as cartas forem encontradas.

## Implementação
O jogo é desenvolvido usando:
- **HTML:** Estrutura do jogo, incluindo tabuleiro e cartas.
- **CSS:** Estilização do tabuleiro e das cartas.
- **JavaScript:** Controle do comportamento do jogo, verificação de pares e remoção de cartas.

## Atualizações
Adicionada verificação para avaliar se a carta já foi encontrada antes. A verificação usa o método `classList.contains()`, retornando um valor booleano indicando se o elemento possui a classe especificada.

Verificação !openCards.includes(this) antes de adicionar o objeto ao array openCards.

## Proposta
- Criar um contador para um possivel score
- Criar modos de dificuldade diferente tais como um delay especifico para que a carta vire.
- Criar modelos mais dificeis com mais cartas.
- ~~Implementar feedback com audio, som de virar carta, de par pareado, par incorreto e end game~~