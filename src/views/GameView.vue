<script setup lang="ts">
import MainGrid from '@/components/MainGrid.vue';
import MediumTile from '@/components/MediumTile.vue';
import { useTiles } from '@/composables/useTiles';
import { ref } from 'vue';

const gridCols = ref(5);
const gridRows = ref(5);

const { possibleTiles } = useTiles();

function getRandomTileCombination() {
  const randomIndex = Math.floor(Math.random() * possibleTiles.value.length);
  return possibleTiles.value[randomIndex];
}

const hasTile = (): boolean => true;
</script>

<template>
  <main class="bg-blue-500 w-dvw h-dvh flex">
    <MainGrid :rows="gridRows" :columns="gridCols">
      <template v-for="y in gridRows" :key="y">
        <template v-for="x in gridCols" :key="x">
          <template v-if="hasTile()">
            <MediumTile :x="x" :y="y" :tiles="getRandomTileCombination()" />
          </template>
          <template v-else>
            <div></div>
          </template>
        </template>
      </template>
    </MainGrid>
  </main>
</template>
