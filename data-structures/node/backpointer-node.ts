import { BackpointerEdge } from '../edge/backpointer-edge';

export class BackpointerNode<T> {
  public value: T;
  public backpointer: BackpointerNode<T>;
  public neighbors: BackpointerEdge<T>[] = new Array<BackpointerEdge<T>>();

  constructor(value?: T) {
    if (this.value) {
      this.value = value;
      this.backpointer = this;
    }
  }

  public addNeighbor = (neighbor: BackpointerNode<T>, weight: number = 1) =>
    this.neighbors.push(new BackpointerEdge<T>(this, neighbor, weight));
}
