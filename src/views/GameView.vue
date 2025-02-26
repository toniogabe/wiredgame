<script setup lang="ts">
import MainGrid from '@/components/MainGrid.vue';
import MediumTile from '@/components/MediumTile.vue';
import { useTiles } from '@/composables/useTiles';
import { ref, type VNodeRef } from 'vue';

const gridCols = ref(5);
const gridRows = ref(5);

const { possibleTiles } = useTiles();

const tilesRefs = ref(new Map());

const hasTile = (): boolean => true;

function getRandomTileCombination() {
  const randomIndex = Math.floor(Math.random() * possibleTiles.value.length);
  return possibleTiles.value[randomIndex];
}

function setTileRef(el: HTMLElement, x: number, y: number): VNodeRef {
  tilesRefs.value.set(`${x}${y}`, el);
  return tilesRefs;
}

function getTileRef(x: number, y: number): HTMLElement {
  return tilesRefs.value.get(`${x}${y}`);
}

function logme(x: number, y: number) {
  const tile = getTileRef(x, y);
  console.log(tile.id);
}
</script>

<template>
  <main class="bg-blue-500 w-dvw h-dvh flex">
    <MainGrid :rows="gridRows" :columns="gridCols">
      <template v-for="y in gridRows" :key="y">
        <template v-for="x in gridCols" :key="x">
          <template v-if="hasTile()">
            <MediumTile
              :ref="(el: HTMLElement): VNodeRef => setTileRef(el, x, y)"
              :x="x"
              :y="y"
              :tiles="getRandomTileCombination()"
              @click="logme(x, y)"
            />
          </template>
          <template v-else>
            <div></div>
          </template>
        </template>
      </template>
    </MainGrid>
  </main>
</template>
