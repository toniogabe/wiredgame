<script setup lang="ts">
import SmallTile from '@/components/SmallTile.vue';
import { useTilePosition } from '@/composables/useTilePosition';
import type { Direction } from '@/composables/useTiles';
import { computed } from 'vue';

const props = defineProps<{
  x: number;
  y: number;
  tiles: Direction[];
}>();

const { posX, posY, position } = useTilePosition(props.x, props.y);

const id = computed(() => `${posX.value}${posY.value}`);
const tiles = computed(() => props.tiles);

const smallTiles: [number, number, boolean][] = [
  [1, 1, false], // TopLeft
  [2, 1, has('top')], // Top
  [3, 1, false], // TopRight
  [1, 2, has('left')], // Left
  [2, 2, true], // Center
  [3, 2, has('right')], // Right
  [1, 3, false], // BottomLeft
  [2, 3, has('bottom')], // Bottom
  [3, 3, false], // BottomRight
];

function has(direction: Direction): boolean {
  return tiles.value.includes(direction);
}

defineExpose({
  id,
});
</script>

<template>
  <div
    :id="id"
    :class="[
      'grid grid-cols-3 grid-rows-3 w-fit h-fit relative cursor-pointer hover:ring-2 ring-amber-400',
    ]"
  >
    <!-- TopLeft -->
    <SmallTile
      v-for="[x, y, isActive] in smallTiles"
      :key="`${x}${y}`"
      :x="x"
      :y="y"
      :parentId="id"
      :isActive="isActive"
    />
  </div>
</template>
