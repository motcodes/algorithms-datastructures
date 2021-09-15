import { Edge } from '../edge';

export class Node<T> {
  public label: string;
  public neighbors: Edge<T>[] = new Array<Edge<T>>();
  public key: number = Number.MAX_SAFE_INTEGER;
  public isVisited: boolean = false;

  constructor(label: string) {
    this.label = label;
  }

  public addNeighbor(neighbor: Node<T>, weight: number): void {
    this.neighbors.push(new Edge<T>(this, neighbor, weight));
    if (
      !neighbor.neighbors.some(
        (item) => item.from === neighbor && item.to === this
      )
    ) {
      neighbor.addNeighbor(this, weight);
    }
  }

  public getNeighbors = (): Edge<T>[] => this.neighbors;
}
