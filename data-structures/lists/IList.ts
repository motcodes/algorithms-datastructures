export interface IList<T> {
  length: number;
  add(element: T): void;
  selectByIndex(index: number): T | null;
  deleteAtIndex(position: number): void;
}
