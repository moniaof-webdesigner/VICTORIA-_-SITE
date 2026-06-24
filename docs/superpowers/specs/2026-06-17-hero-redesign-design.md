# Redesign do Hero — Victoria Manual da Criação de Conteúdo

## Objetivo
Substituir o hero atual (layout em duas colunas com divisória visível entre texto e foto) por um hero full-bleed, cinematográfico, inspirado nas referências "Acelera Dividendos" e "Juvenal Valentim": a foto da Victoria se funde organicamente no fundo, sem nenhuma borda reta separando texto e imagem, com efeitos flutuantes (partículas douradas + logos de plataformas).

## Imagens usadas
- `assets/vic-rosto-frente.avif` — imagem principal, lado direito/centro-direita, maior que a versão atual
- `assets/vic-sentada-pensativa-livros.avif` — imagem fantasma em segundo plano, deslocada, tingida em dourado/sépia, bem desfocada, baixa opacidade (~25-35%)

## Estrutura de camadas (fundo → frente)
1. Fundo escuro com radial-gradients (gold/bordeaux/rose) — mantém paleta atual
2. Imagem fantasma (sépia/dourada, blur pesado, deslocada)
3. Imagem principal (máscara radial orgânica, sem corte reto, full-bleed)
4. Partículas douradas flutuantes (~15-20 elementos, CSS puro, tamanhos/opacidades variados, flutuação translateY/X)
5. Logos de plataformas flutuantes (IG, FB, TikTok, YouTube, CapCut, Google) — redistribuídos por toda a largura, não só à direita
6. Texto (eyebrow, H1, subtítulo, CTAs) sobre scrim radial que se intensifica à esquerda e dissolve para a direita — sem linha de corte
7. Stats strip na base

## Responsividade
- Mobile: foto principal como fundo full-bleed, scrim mais forte por trás de todo texto empilhado verticalmente; imagem fantasma e logos reduzem opacidade/escala.

## Acessibilidade / Performance
- `will-change: transform` nas partículas/logos
- Respeitar `prefers-reduced-motion` (desabilita animações de flutuação)
- Imagens decorativas com `aria-hidden`, imagem principal mantém `alt` descritivo

## Fora de escopo
- Não altera outras seções da página (manifesto, sobre, benefícios, etc.)
- Não adiciona novos assets de imagem além dos dois já existentes no acervo
