import { Node } from '../node/kruskal-node';

export class Graph<T> {
  public root: Node<T>;
  public nodes: Node<T>[] = new Array<Node<T>>();

  constructor(name?: T) {
    if (name) {
      this.root = new Node<T>(name);
      this.nodes.push(this.root);
    }
  }

  public createRoot(name: T): Node<T> {
    this.root = new Node<T>(name);
    this.nodes.push(this.root);
    return this.root;
  }

  public createNode(name: T): Node<T> {
    const node = new Node<T>(name);
    this.nodes.push(node);
    return node;
  }

  public addNode = (node: Node<T>) => this.nodes.push(node);

  public addNodeViaLabel = (label: T) => this.nodes.push(new Node<T>(label));

  // public getNode = (label: T): Node<T> =>
  //   this.nodes.find((node) => node.label === label);
}
