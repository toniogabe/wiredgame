import type { MediumTileElement } from '@/types/MediumTile';
import type { Direction } from './useTiles';

export function useTileConnection() {
  const getOppositeDirection = (direction: Direction): Direction => {
    const opposites: Record<Direction, Direction> = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    };
    return opposites[direction];
  };

  const isConnected = (
    tile: MediumTileElement,
    checkedTile: MediumTileElement,
    direction: Direction,
  ): boolean => {
    console.log(tile.tiles);
    // Check if both tiles have the matching directions
    return (
      tile.tiles.includes(direction) && checkedTile.tiles.includes(getOppositeDirection(direction))
    );
  };

  return {
    isConnected,
  };
}
