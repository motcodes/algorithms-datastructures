import { IList } from '../../data-structures/lists/IList';

// returns index or -1 if there is no match
export function BinarySearch<T>(list: IList<T>, element: T) {
  let left: number = 0;
  let right: number = list.length - 1;

  while (left <= right) {
    const middle: number = Math.floor((left + right) / 2);
    const middleElement = list.selectByIndex(middle);

    if (middleElement && element < middleElement) {
      right = middle - 1;
    } else if (middleElement && element > middleElement) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
