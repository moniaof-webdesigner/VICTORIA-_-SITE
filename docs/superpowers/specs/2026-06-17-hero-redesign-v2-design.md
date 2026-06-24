# Redesign do Hero v2 — Recorte + blend de imagens (estilo Juvenal Valentim)

## Contexto
Substitui a v1 (full-bleed) por uma composição mais convencional: texto à esquerda, bloco de fotos recortadas/em camadas à direita — inspirado na referência "Juvenal Valentim" (foto cutout do herói + rostos fantasmas desfocados ao redor).

## Layout
- Texto (eyebrow, H1, subtítulo, CTAs, stats) à **esquerda**, como em landing pages convencionais
- Bloco de fotos à **direita**, ocupando ~40-45% da largura do hero (não mais full-bleed)

## Imagens usadas
1. **Principal**: `assets/vic-rosto-frente.avif`
   - Espelhada horizontalmente (`scaleX(-1)`) — olha para a esquerda, em direção ao texto
   - Tamanho reduzido vs. v1
   - "Sem fundo" simulado via `clip-path`/mask desenhada à mão acompanhando o contorno do corpo/cabelo, com borda em `blur` + `drop-shadow` dourado (glow), sem corte seco — não há asset PNG transparente real no acervo, é uma aproximação via CSS
2. **Fantasma 1**: `assets/vic-sentada-pensativa-livros.avif` — maior, deslocada atrás/acima à direita, opacidade ~20%, tom dourado/sépia, blur pesado
3. **Fantasma 2**: `assets/vic-sentada-lado-livros.avif` — menor, deslocada para o lado, opacidade ~12%, dourada/blur

## Blend visual
Glow/radial-gradient ambiente ao redor de todo o bloco de fotos (não apenas da foto principal), fundindo as bordas das 3 camadas no fundo escuro sem nenhum corte reto.

## Efeitos flutuantes
- Partículas douradas (mantidas da v1), redistribuídas ao redor do bloco de fotos à direita
- Logos de plataformas (IG, FB, TikTok, YouTube, CapCut, Google) redistribuídos ao redor do bloco de fotos

## Responsividade
- Mobile: bloco de fotos (reduzido) no topo, centralizado; texto abaixo, mesma lógica de glow/blend

## Acessibilidade / Performance
- `prefers-reduced-motion` respeitado (regra global já existente em responsive.css)
- Imagens fantasmas com `aria-hidden="true"` e `alt=""`; imagem principal mantém `alt` descritivo
- `will-change: transform` nas camadas animadas

## Fora de escopo
- Não há remoção real de fundo (sem asset PNG transparente) — aproximação via CSS mask
- Não altera outras seções da página
