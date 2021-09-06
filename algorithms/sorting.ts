// selection sort
export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let currentMin = arr[i];
    let currentMinIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < currentMin) {
        currentMin = arr[j];
        currentMinIndex = j;
      }
    }

    arr[currentMinIndex] = arr[i];
    arr[i] = currentMin;
  }
  return arr;
}

// insertion sort
export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}

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
