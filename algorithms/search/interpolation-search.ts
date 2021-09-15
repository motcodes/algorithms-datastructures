// interpolation search only takes a number array
// returns index or -1 if there is no match
export function InterpolationSearch(
  sortedList: number[],
  searchElement: number
): number {
  let low: number = 0;
  let high: number = sortedList.length - 1;

  while (
    high >= low &&
    sortedList[high] >= searchElement &&
    sortedList[low] <= searchElement
  ) {
    const position =
      low +
      ((searchElement - sortedList[low]) * (high - low)) /
        (sortedList[high] - sortedList[low]);

    if (sortedList[position] === searchElement) {
      return position;
    } else if (sortedList[position] < searchElement) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return -1;
}
