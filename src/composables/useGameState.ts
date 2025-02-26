import { computed, ref } from 'vue';

export function useGameState() {
  const score = ref(0);
  const isGameOver = ref(false);

  const hasWon = computed(() => score.value >= 100);

  function incrementScore(points: number) {
    score.value += points;
  }

  function resetGame() {
    score.value = 0;
    isGameOver.value = false;
  }

  return {
    score,
    isGameOver,
    hasWon,
    incrementScore,
    resetGame,
  };
}
