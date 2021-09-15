import { IList } from '../../data-structures/lists/IList';

// returns index or -1 if there is no match
export function BinarySearch<T>(list: IList<T>, searchElement: T) {
  let low: number = 0;
  let high: number = list.length;

  while (low <= high) {
    const middle: number = Math.floor((low + high) / 2);
    const middleElement = list.selectByIndex(middle);

    if (middleElement && searchElement < middleElement) {
      high = middle - 1;
    } else if (middleElement && searchElement > middleElement) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
