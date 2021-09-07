export class HashTable {
  public table: any[];
  public size: number;

  constructor(size: number = 127) {
    this.table = new Array(size);
    this.size = 0;
  }

  private hash(key: any): number {
    let hash: number = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  public set(key: any, value: number) {
    const index = this.hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  public get = (key: any) => this.table[this.hash(key)];

  public remove(key: any): boolean {
    const index = this.hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}
