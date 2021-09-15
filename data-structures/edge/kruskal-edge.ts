import { Node } from '../node/kruskal-node';

export class Edge<T> {
  public from: Node<T>;
  public to: Node<T>;
  public weight: number;

  constructor(from: Node<T>, to: Node<T>, weight: number) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}
