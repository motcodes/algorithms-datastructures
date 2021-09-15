import { Node } from '../node';

export class Queue<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public push(item: T): void {
    const newList = new Node<T>(item);
    if (!this.head) {
      this.head = newList;
      this.tail = this.head;
    } else {
      newList.prev = this.tail;
      if (this.tail) {
        this.tail.next = newList;
      }
    }
    this.tail = newList;
    this.length++;
  }

  public pop(): T | null {
    if (!this.length) return null;

    if (this.head) {
      const removedValue = this.head.value;
      this.head = this.head.next;
      this.length--;
      return removedValue;
    }
    return null;
  }

  public selectByIndex(index: number): T | null {
    let current = this.head;
    let count: number = 0;
    while (current !== null) {
      if (count === index && current) {
        return current.value;
      }
      count++;
      current = current.next;
    }
    return null;
  }
}
