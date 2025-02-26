<script setup lang="ts">
import { useTilePosition } from '@/composables/useTilePosition';
import { computed, ref } from 'vue';

const props = defineProps({
  x: {
    type: Number,
    required: true,
  },

  y: {
    type: Number,
    required: true,
  },

  parentId: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    required: true,
  },
});

const { posX, posY, position } = useTilePosition(props.x, props.y);
const showCoordinates = ref(false);

const color = computed(() => (props.isActive ? 'bg-amber-100' : 'bg-blue-400'));
const id = computed(() => `${props.parentId}${posX}${posY}`);
</script>

<template>
  <div :class="['flex text-xs h-12 aspect-square', color]">
    <span v-if="showCoordinates" class="m-auto text-black/20">{{ id }}</span>
  </div>
</template>
