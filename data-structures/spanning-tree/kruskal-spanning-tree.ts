import { Edge } from '../edge/kruskal-edge';
import { Graph } from '../graph/kruskal-graph';
import { UnionFind } from '../union-find/kruskal-union-find';

export class KruskalSpanningTree<T> {
  public compute(graph: Graph<T>, costMatrix: number[][]) {
    const mst = new Graph<T>();
    const unionFind = new UnionFind<T>();
    let edges: Edge<T>[] = new Array<Edge<T>>();

    graph.nodes.forEach((node) => {
      node.neighbors.forEach((edge) => {
        edges.push(edge);
      });
    });

    edges = edges.sort((a, b) => a.weight - b.weight);

    edges.forEach((edge) => {
      const u = edge.from;
      const v = edge.to;

      const uSet = unionFind.find(u);
      const vSet = unionFind.find(v);

      if (uSet !== vSet) {
        const newNode = mst.createNode(u.value);
        newNode.key = edge.weight;
        newNode.addNeighbor(v, edge.weight);
        unionFind.union(u, v);
      }
    });

    return mst;
  }
}
