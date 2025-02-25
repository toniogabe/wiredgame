<script setup lang="ts">
import { useTilePosition } from '@/composables/useTilePosition';
import { computed } from 'vue';
import SmallTile from './SmallTile.vue';

const props = defineProps({
  x: {
    type: Number,
    required: true,
  },

  y: {
    type: Number,
    required: true,
  },

  tiles: {
    type: Array,
    required: true,
  },
});

const { posX, posY, position } = useTilePosition(props.x, props.y);

const tiles = computed(() => props.tiles);
const id = computed(() => `${posX.value}${posY.value}`);

function has(direction: string): boolean {
  return tiles.value.includes(direction);
}
</script>

<template>
  <div
    :id="id"
    :class="[
      'grid grid-cols-3 grid-rows-3 w-fit h-fit relative cursor-pointer hover:ring-2 ring-amber-400',
    ]"
  >
    <!-- TopLeft -->
    <SmallTile :x="1" :y="1" :parentId="id" :isActive="false" />

    <!-- Top Tile -->
    <SmallTile :x="2" :y="1" :parentId="id" :isActive="has('top')" />

    <!-- TopRight -->
    <SmallTile :x="3" :y="1" :parentId="id" :isActive="false" />

    <!-- Left Tile -->
    <SmallTile :x="1" :y="2" :parentId="id" :isActive="has('left')" />

    <!-- Center Tile -->
    <SmallTile :x="2" :y="2" :parentId="id" :isActive="true" />

    <!-- Right Tile -->
    <SmallTile :x="3" :y="2" :parentId="id" :isActive="has('right')" />

    <!-- BottomLeft -->
    <SmallTile :x="1" :y="3" :parentId="id" :isActive="false" />

    <!-- Bottom Tile -->
    <SmallTile :x="2" :y="3" :parentId="id" :isActive="has('bottom')" />

    <!-- BottomRight -->
    <SmallTile :x="3" :y="3" :parentId="id" :isActive="false" />
  </div>
</template>
