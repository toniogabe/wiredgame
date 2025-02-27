export interface MediumTileElement extends HTMLElement {
  position: { x: number; y: number };
  rotate: () => void;
  activate: () => void;
}
