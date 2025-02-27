export interface MediumTileElement extends HTMLElement {
  position: { x: number; y: number };
  tiles: string[];
  rotate: () => void;
  activate: () => void;
  deactivate: () => void;
}
