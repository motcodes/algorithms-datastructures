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
