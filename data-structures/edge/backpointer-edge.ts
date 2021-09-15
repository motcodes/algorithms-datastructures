import { BackpointerNode } from '../node/backpointer-node';

export class BackpointerEdge<T> {
  public from: BackpointerNode<T>;
  public to: BackpointerNode<T>;
  public weight: number;

  constructor(
    from: BackpointerNode<T>,
    to: BackpointerNode<T>,
    weight: number
  ) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}
