import { ref } from 'vue';

export type Direction = 'top' | 'right' | 'bottom' | 'left';

export function useTiles() {
  const possibleTiles = ref<Direction[][]>([
    // Single directions
    ['top'],
    ['right'],
    ['bottom'],
    ['left'],

    // Two directions
    ['top', 'right'],
    ['top', 'bottom'],
    ['top', 'left'],
    ['right', 'bottom'],
    ['right', 'left'],
    ['bottom', 'left'],
    ['right', 'top'],
    ['bottom', 'top'],
    ['left', 'top'],
    ['bottom', 'right'],
    ['left', 'right'],
    ['left', 'bottom'],

    // Three directions
    ['top', 'right', 'bottom'],
    ['top', 'right', 'left'],
    ['top', 'bottom', 'left'],
    ['right', 'bottom', 'left'],
    ['right', 'top', 'bottom'],
    ['right', 'top', 'left'],
    ['right', 'bottom', 'top'],
    ['right', 'left', 'top'],
    ['bottom', 'top', 'right'],
    ['bottom', 'top', 'left'],
    ['bottom', 'right', 'left'],
    ['bottom', 'left', 'top'],
    ['left', 'top', 'right'],
    ['left', 'top', 'bottom'],
    ['left', 'right', 'bottom'],
    ['left', 'bottom', 'top'],
    ['left', 'bottom', 'right'],
    ['left', 'right', 'top'],
    ['top', 'left', 'right'],
    ['top', 'left', 'bottom'],
    ['top', 'bottom', 'right'],
    ['right', 'left', 'bottom'],

    // All four directions
    ['top', 'right', 'bottom', 'left'],
  ]);

  return { possibleTiles };
}
