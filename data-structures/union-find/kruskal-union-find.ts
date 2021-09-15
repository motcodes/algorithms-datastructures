import { Node } from '../node/kruskal-node';
import { Set } from '../set/kruskal-set';

export class UnionFind<K> {
  setList: Set<K>[] = new Array<Set<K>>();

  public makeSets(list: Node<K>[]) {
    list.forEach((node) => {
      const root = new Set<K>(node);
      this.setList.push(root);
      node.addNeighbor(node);
    });
  }

  public find = (x: Node<K>): Node<K> => (x.backpointer ? x.backpointer : x);

  public union(r: Node<K>, s: Node<K>): void {
    const rHead = this.find(r);
    const sHead = this.find(s);

    let rSet: Set<K> = new Set<K>();
    let sSet: Set<K> = new Set<K>();

    if (rHead !== sHead) {
      this.setList.forEach((set) => {
        if (set.head == rHead) {
          rSet = set;
        }
        if (set.head == sHead) {
          sSet = set;
        }
      });

      //weights for kruskal
      const rSize = rSet.nodes.length;
      const sSize = sSet.nodes.length;

      if (rSize >= sSize) {
        this.miniUnion({
          bigHead: rHead,
          bigSet: rSet,
          smallSet: sSet,
          smallSize: sSize,
        });
      }
      if (rSize < sSize) {
        this.miniUnion({
          bigHead: sHead,
          bigSet: sSet,
          smallSet: rSet,
          smallSize: rSize,
        });
      }
    }
  }

  private miniUnion({
    bigHead,
    bigSet,
    smallSet,
    smallSize,
  }: {
    bigHead: Node<K>;
    bigSet: Set<K>;
    smallSet: Set<K>;
    smallSize: number;
  }) {
    smallSet.nodes.forEach((node) => {
      bigSet.nodes.push(node);
      node.backpointer = bigHead;
    });
    bigSet.head.neighbors[0].to = smallSet.nodes[0];
    smallSet.nodes[smallSize - 1] = bigSet.nodes[0];
  }
}
