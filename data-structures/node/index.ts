export class Node<T> {
  public value: T;
  public next: Node<T>;
  public prev: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
