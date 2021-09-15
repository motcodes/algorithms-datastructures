import { Node } from '../node/tree-node';

export class Tree<T> {
  public root: Node<T>;
  private height: number = 0;

  constructor(root?: Node<T>, key?: T) {
    if (root) {
      this.root = root;
    }
    if (key) {
      this.root = new Node<T>(key);
    }
  }

  public addBinary(key: T): void {
    const newNode = new Node<T>(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        let temp = current;
        if (newNode.key < current.key) {
          current = current.left;
          if (!current) {
            temp.left = newNode;
            newNode.parent = temp;
          }
        } else {
          current = current.right;
          if (!current) {
            temp.right = newNode;
            newNode.parent = temp;
          }
        }
      }
    }
  }

  public addRecursive(key: T): void {
    const newNode = new Node<T>(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root = this.addRec(this.root, newNode);
    }
  }

  private addRec(current: Node<T>, newNode: Node<T>): Node<T> {
    if (current) {
      current = newNode;
      return current;
    } else if (newNode.key < current.key) {
      current.left = this.addRec(current.left, newNode);
      current = this.balanceTree(current);
    } else if (newNode.key > current.key) {
      current.right = this.addRec(current.right, newNode);
      current = this.balanceTree(current);
    }
    return current;
  }

  private balanceTree(node: Node<T>): Node<T> {
    const balanceFactor = this.balanceFactor(node);
    if (balanceFactor > 1) {
      if (this.balanceFactor(node.left) > 0) {
        node = this.leftLeftCase(node);
      } else {
        node = this.leftRightCase(node);
      }
    } else if (balanceFactor < -1) {
      if (this.balanceFactor(node.right) > 0) {
        node = this.rightLeftCase(node);
      } else {
        node = this.rightRightCase(node);
      }
    }
    return node;
  }

  public delete(deleteKey: T): void {
    this.root = this.deleteRecursive(this.root, deleteKey);
    console.log(`deleted Node with key: ${deleteKey}`);
  }

  private deleteRecursive(node: Node<T>, key: T): Node<T> {
    if (!node) {
      return node;
    }

    if (key < node.key) {
      node.left = this.deleteRecursive(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteRecursive(node.right, key);
    } else {
      if (!node.left && !node.right) {
        let successor: Node<T> = null;

        if (successor === node.left) {
          successor = node.right;
        } else {
          successor = node.left;
        }

        if (successor == null) {
          successor = node;
          node = null;
        } else {
          node = successor;
        }
      } else {
        const successor = this.findMin(node.right);
        node.key = successor.key;
        node.right = this.deleteRecursive(node.right, successor.key);
      }
    }

    const balanceFactor = this.balanceFactor(node);
    if (balanceFactor > 1) {
      if (this.balanceFactor(node.left) > 0) {
        return this.leftLeftCase(node);
      } else {
        return this.leftRightCase(node);
      }
    } else if (balanceFactor < -1) {
      if (this.balanceFactor(node.right) > 0) {
        return this.rightLeftCase(node);
      } else {
        return this.rightRightCase(node);
      }
    }

    return node;
  }

  public find(searchKey: T): Node<T> {
    let current = this.root;
    while (current) {
      if (searchKey === current.key) {
        return current;
      } else if (searchKey < current.key) {
        current = current.left;
      } else if (searchKey > current.key) {
        current = current.right;
      } else {
        current = null;
      }
    }
    return current;
  }

  private findMin(node: Node<T>): Node<T> {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  private traverseInOrder(parent: Node<T>): void {
    if (parent) {
      this.traverseInOrder(parent.left);
      console.log(` ${parent.key};`);
      this.traverseInOrder(parent.right);
    }
  }

  private dotFormat(parent: Node<T>): void {
    if (parent) {
      this.dotFormat(parent.left);
      if (parent.left) {
        console.log(
          `  ${parent.key} -> ${parent.left.key}
           [label=\"${this.getHeight(parent.left.key)}\"];`
        );
      }
      if (parent.right) {
        console.log(
          `  ${parent.key} -> ${parent.right.key}
           [label=\"${this.getHeight(parent.right.key)}\"];`
        );
      }
      this.dotFormat(parent.right);
    }
  }

  public toString(): string {
    console.log('digraph {');
    this.traverseInOrder(this.root);
    this.dotFormat(this.root);
    console.log('}');
    return '';
  }

  private findHeight(node: Node<T>, key?: T): number {
    if (!node) {
      return -1;
    }

    const leftHeight = this.findHeight(node.left, key);
    const rightHeight = this.findHeight(node.right, key);

    let height = Math.max(leftHeight, rightHeight) + 1;

    if (key && node.key === key) {
      this.height = ++height;
    }
    return height;
  }

  private getHeight(key: T): number {
    this.findHeight(this.root, key);
    return this.height;
  }

  private balanceFactor(node: Node<T>): number {
    if (!node) return 0;
    const left = this.findHeight(node.left);
    const right = this.findHeight(node.right);
    return left - right;
  }

  private rightRotation(y: Node<T>): Node<T> {
    const x = y.left;
    y.left = x.right;
    x.right = x;
    return x;
  }
  private leftRotation(x: Node<T>): Node<T> {
    const y = x.right;
    x.right = y.left;
    y.left = x;
    return y;
  }

  private leftLeftCase = (node: Node<T>): Node<T> => this.rightRotation(node);
  private rightRightCase = (node: Node<T>): Node<T> => this.leftRotation(node);

  private leftRightCase(node: Node<T>): Node<T> {
    node.left = this.rightRightCase(node.left);
    return this.leftLeftCase(node);
  }
  private rightLeftCase(node: Node<T>): Node<T> {
    node.right = this.leftLeftCase(node.right);
    return this.rightRightCase(node);
  }
}
