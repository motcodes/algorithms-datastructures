export class ElementArrayList<T> {
  public list: T[];
  public length: number = 0;

  constructor() {
    this.list = [];
  }

  public add(element: T): void {
    this.list.push(element);
    this.length++;
  }

  public selectByIndex = (index: number): T => this.list[index];

  public deleteAtIndex(index: number): void {
    this.list.splice(index, 1);
    this.length--;
  }
}
