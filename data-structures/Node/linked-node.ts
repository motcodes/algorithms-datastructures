export class LinkedNode<T> {
  public value: T;
  public next: LinkedNode<T> | null;
  public prev: LinkedNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
