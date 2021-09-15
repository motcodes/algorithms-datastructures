import { Graph } from '../graph';
import { Node } from '../node/edge-node';

export class PrimSpanningTree<T> {
  public compute(graph: Graph<T>, costMatrix: number[][]): Graph<T> {
    const mst = new Graph<T>();
    const nodes = graph.nodes;
    const parent = new Array<Node<T>>();

    nodes.forEach((node) => {
      node.key = Number.MAX_SAFE_INTEGER;
      parent.push(null);
    });
    nodes[0].key = 0;

    const queue = [...nodes];

    while (queue.length > 0) {
      let smallest: Node<T> = queue[0];
      queue.forEach((node) => node.key < smallest.key && (smallest = node));
      queue.splice(queue.indexOf(smallest), 1);

      const smallestIndex = nodes.indexOf(smallest);

      if (parent[smallestIndex]) {
        const newNode = mst.createRoot(smallest.label);
        newNode.key = smallest.key;

        const parentIndex = nodes.indexOf(parent[smallestIndex]);
        const weight = costMatrix[parentIndex][smallestIndex];
        newNode.addNeighbor(parent[smallestIndex], weight);
      }

      smallest.neighbors.forEach((vertex) => {
        const vertexIndex = nodes.indexOf(vertex.to);

        const isVertextInQueue: boolean = queue.includes(vertex.to);
        const isVertextWeightSmaller: boolean =
          vertex.weight <= nodes[vertexIndex].key;

        if (isVertextInQueue && isVertextWeightSmaller) {
          parent[vertexIndex] = smallest;
          nodes[vertexIndex].key = vertex.weight;
        }
      });
    }

    return mst;
  }
}
