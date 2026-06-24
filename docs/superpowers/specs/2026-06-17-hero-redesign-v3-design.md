# Redesign do Hero v3 — correção de bug + retrato vertical

## Problema da v2
- A foto principal apareceu com um corte reto visível no topo (a máscara radial não estava feathering corretamente — provável conflito entre `filter` + `mask-image` + `transform: scaleX(-1)` na mesma camada, combinado com um raio de gradiente insuficiente)
- As imagens fantasmas ficaram completamente invisíveis (opacidade baixa demais + posicionamento atrás da foto principal sem nenhuma área visível)
- A foto principal ficou com aparência circular/oval, quando o pedido era vertical (retrato)

## Correção
1. **Foto principal**: retângulo vertical (~3:4), sem oval/círculo. Máscara em gradiente linear/radial combinado aplicada com feather generoso (15-20% em cada borda) para garantir transição suave sem corte reto. Isolar a máscara em elemento próprio, testado visualmente via screenshot antes de finalizar.
2. **Fantasmas**: opacidade aumentada para ~35-45%, posicionados para escapar visivelmente das bordas da foto principal (não mais ocultos atrás dela).
3. **Validação obrigatória**: screenshot em desktop (1440px), widescreen (1920px), tablet (820px) e mobile (390px) antes de reportar como concluído.

## Mantido da v2
- Layout convencional (texto esquerda, fotos direita)
- Espelhamento horizontal da foto principal
- Glow dourado ao redor do bloco de fotos
- Partículas + logos flutuantes
