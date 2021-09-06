import { LinkedNode } from '../Node/linked-node';
import { IList } from './IList';

export class DoubleLinkedList<T> implements IList<T> {
  public head: LinkedNode<T> | null;
  public tail: LinkedNode<T> | null;
  public length: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public add(element: T): void {
    const newList: LinkedNode<T> = new LinkedNode<T>(element);
    if (this.head === null) {
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

  public selectByIndex(index: number) {
    let current = this.head;
    let count: number = 0;
    while (current) {
      if (count === index) {
        return current.value;
      }
      count++;
      current = current.next;
    }

    return null;
  }

  public deleteAtIndex(index: number): void {
    let count: number = 0;
    let current: LinkedNode<T> | null = this.head;
    let previous: LinkedNode<T> | null = current;
    while (count <= index) {
      if (count === index && previous && current) {
        previous.next = current.next;
        current = null;
        this.length--;
      } else {
        previous = current;
        if (current) {
          current = current.next;
        }
      }
      count++;
    }
  }
}
