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
    :class="['grid gap-0.5 p-0.5 m-auto', `grid-cols-${columns}`, `grid-rows-${rows}`]"
  >
    <slot></slot>
  </div>
</template>
