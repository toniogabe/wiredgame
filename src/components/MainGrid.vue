<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  rows: {
    type: Number,
    required: true,
  },

  columns: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    id="basegrid"
    class="grid gap-0.5 p-0.5 m-auto"
    :style="{
      'grid-template-columns': `repeat(${columns}, minmax(0, 1fr))`,
      'grid-template-rows': `repeat(${rows}, minmax(0, 1fr))`,
    }"
  >
    <slot></slot>
  </div>
</template>
