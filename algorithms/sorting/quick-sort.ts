// quick sort
export function quickSort(
  arr: number[],
  left: number,
  right: number
): number[] {
  if (arr.length > 1) {
    let p = partion(arr, left, right);
    if (left < p - 1) {
      quickSort(arr, left, p - 1);
    }
    if (p < right) {
      quickSort(arr, p, right);
    }
  }
  return arr;
}

function partion(arr: number[], left: number, right: number): number {
  let pivot = Math.floor((left + right) / 2);

  while (left < right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left++;
      right--;
    }
  }
  return left;
}
