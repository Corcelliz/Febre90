# Febre90's — rebranding do site (design)

## Intenção
O visitante deve **sentir vontade de ler** o conteúdo e **gostar da apresentação**.
O site de hoje (2022) usa texto fino e cinza sobre fundo cinza-azulado, sem relação
com a identidade visual do grupo.

## Metas
- Leitura confortável (coluna estreita, serifa, contraste alto).
- Identidade fiel ao grupo: capas do Skorpio / Ferran M., pato febril, cores saturadas.
- Boom-bap "cru": papel, tinta, impressão imperfeita, em vez de interface polida.
- Acessível (teclado, foco visível, `prefers-reduced-motion`, alt text) e responsivo.
- Leve: HTML, CSS e JS puros, sem build e sem dependências além das fontes.

## Não-metas
- Não inventar datas de show, links de redes ou e-mail. Esses espaços ficam marcados.
- Não adicionar framework, CMS ou backend.

## Anti-metas (seria fracasso mesmo "funcionando")
- Parecer "site de artista" genérico (herói escuro, gradiente, glass).
- Parecer infantil: a cor é ancorada por preto e papel e pela foto em preto e branco.

## Abordagens consideradas
A. **Fanzine / gibi de rua** (escolhida): papel creme, tinta preta, vermelho / amarelo / azul do letreiro.
B. Catálogo de fitas cassete: sóbrio, mas cansa na leitura e perde a energia do grupo.
C. Preto e branco de rua: esconde o lado ilustrado, que é a assinatura do Febre.
Detalhe da B aproveitado em A: números de catálogo (MPSCB001, MPSCB003) nas capas.

## Sistema visual
- Cores: papel `#f2e8cf`, tinta `#15110f`, vermelho `#e92324` (do logo), amarelo `#ffd51f`, azul `#1d3fd1`, rosa `#f5a3c7`.
- Tipografia: **Bowlby One** (títulos, parente do letreiro gordo), **Source Serif 4** (texto), **Space Mono** (rótulos e catálogo).
- Detalhes: grão de papel, sombras duras deslocadas, rótulos inclinados, fita adesiva nas fotos, faixa de letreiro rolante, balões de fala para citações.

## Estrutura
- `index.html`: hero, lançamentos (cards HQ), citação, a dupla (Sono / Puma), ouça, mais Febre.
- `piscar.html`: matéria "No Piscar dos Olhos" (hoje presa dentro da home).
- `sementinha.html`: matéria "Sementinha do Mal".
- `assets/css/style.css` único; `assets/js/main.js` único.

## Conteúdo
- Texto reescrito com as palavras do site, sem copiar a matéria de terceiros. Os depoimentos
  são mantidos como citação e creditados às entrevistas. Remoção de erros do texto antigo
  (frase colada "A identidade do Febre90's Outro convidado…", datas relativas "nesta sexta (30)").
- Ficha técnica tirada das próprias capas (produção, letra, mix, ilustração, selo).

## Decisões do construtor
- Fotos existentes reaproveitadas e renomeadas; capa PNG de 1,8 MB convertida para JPG.
- Font Awesome removido (kit externo); só texto e SVG inline.
- JS: menu mobile, revelar ao rolar, barra de leitura e tempo de leitura nas matérias, voltar ao topo.
