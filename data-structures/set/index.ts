import { BackpointerNode } from '../node/backpointer-node';

export class Set<T> {
  public head: BackpointerNode<T>;
  public nodes: BackpointerNode<T>[] = new Array<BackpointerNode<T>>();

  constructor(node?: BackpointerNode<T>) {
    if (node) {
      this.head = node;
      this.nodes.push(this.head);
    }
  }
}
