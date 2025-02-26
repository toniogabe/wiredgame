<script setup lang="ts">
import SmallTile from '@/components/SmallTile.vue';
import { useTilePosition } from '@/composables/useTilePosition';
import type { Direction } from '@/composables/useTiles';
import { computed, ref } from 'vue';

const props = defineProps<{
  x: number;
  y: number;
  tiles: Direction[];
}>();

const { posX, posY, position } = useTilePosition(props.x, props.y);

const id = computed(() => `${posX.value}${posY.value}`);
const tiles = ref<Direction[]>(props.tiles);
const rotationAngle = ref(0);

const smallTiles = computed<[number, number, boolean][]>(() => [
  [1, 1, false], // TopLeft
  [2, 1, has('top')], // Top
  [3, 1, false], // TopRight
  [1, 2, has('left')], // Left
  [2, 2, true], // Center
  [3, 2, has('right')], // Right
  [1, 3, false], // BottomLeft
  [2, 3, has('bottom')], // Bottom
  [3, 3, false], // BottomRight
]);

function rotate() {
  const rotationMap: Record<Direction, Direction> = {
    top: 'right',
    right: 'bottom',
    bottom: 'left',
    left: 'top',
  };

  tiles.value = tiles.value.map((tile) => rotationMap[tile] || tile);
  // rotationAngle.value += 90; // Incrementa o ângulo de rotação em 90 graus
  console.log(tiles.value);
}

function has(direction: Direction): boolean {
  return tiles.value.includes(direction);
}

defineExpose({
  id,
  rotate,
});
</script>

<template>
  <div
    :id="id"
    :class="[
      'grid grid-cols-3 grid-rows-3 w-fit h-fit relative cursor-pointer hover:ring-2 ring-amber-400 transition-all ease-in-out duration-300',
    ]"
    :style="{ transform: `rotate(${rotationAngle}deg)` }"
  >
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
