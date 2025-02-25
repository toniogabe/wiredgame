<script setup lang="ts">
import { useTilePosition } from '@/composables/useTilePosition';
import { computed } from 'vue';

const props = defineProps({
  x: {
    type: Number,
    required: true,
  },

  y: {
    type: Number,
    required: true,
  },

  isActive: {
    type: Boolean,
    required: true,
  },
});

const color = computed(() => (props.isActive ? 'bg-amber-100' : 'bg-blue-400'));

const { posX, posY, position } = useTilePosition(props.x, props.y);
</script>

<template>
  <div :class="['flex text-xs h-8 aspect-square', color]"></div>
</template>
