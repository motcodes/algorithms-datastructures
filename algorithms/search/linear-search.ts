import { IList } from '../../data-structures/lists/IList';

export function linearSearch<T>(list: IList<T>, searchItem: T) {
  for (let i = 0; i < list.length; i++) {
    if (list.selectByIndex(i) === searchItem) {
      return i;
    }
  }
  return -1;
}
