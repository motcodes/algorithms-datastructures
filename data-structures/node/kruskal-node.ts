import { Edge } from '../edge/kruskal-edge';

export class Node<T> {
  public value: T;
  public key: number = Number.MAX_SAFE_INTEGER;
  public neighbors: Edge<T>[] = new Array<Edge<T>>();
  public backpointer: Node<T>;

  constructor(value?: T) {
    if (this.value) {
      this.value = value;
      this.backpointer = this;
    }
  }

  public addNeighbor = (neighbor: Node<T>, weight: number = 1) =>
    this.neighbors.push(new Edge<T>(this, neighbor, weight));
}
