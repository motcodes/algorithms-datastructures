export class Node<T> {
  public key: T;
  public parent: Node<T>;
  public left: Node<T>;
  public right: Node<T>;

  constructor(key?: T) {
    if (key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }
}
