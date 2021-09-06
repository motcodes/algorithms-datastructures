// merge sort
export function mergeSort(arr: number[]): number[] {
  const half = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left: number[], right: number[]) {
  let arr: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift() as number);
    } else {
      arr.push(right.shift() as number);
    }
  }
  return [...arr, ...left, ...right];
}
