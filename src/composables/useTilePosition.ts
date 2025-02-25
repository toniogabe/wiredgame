import { computed, ref } from 'vue';

export function useTilePosition(x: number, y: number) {
  const posX = ref(x);
  const posY = ref(y);

  const position = computed(() => ({
    x: posX.value,
    y: posY.value,
  }));

  const setPosition = (newX: number, newY: number) => {
    posX.value = newX;
    posY.value = newY;
  };

  return {
    posX,
    posY,
    position,
    setPosition,
  };
}
