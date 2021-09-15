import { Node } from '../node/kruskal-node';

export class Set<T> {
  public head: Node<T>;
  public nodes: Node<T>[] = new Array<Node<T>>();

  constructor(node?: Node<T>) {
    if (node) {
      this.head = node;
      this.nodes.push(this.head);
    }
  }
}
