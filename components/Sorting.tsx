import type { NextPage } from 'next';
import { useState } from 'react';
import { generateRandomArray } from '../algorithms/randomArray';
import {
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from '../algorithms/sorting';

export const SortingDemo: NextPage = () => {
  const [randomArray, setRandomArray] = useState<number[]>(
    generateRandomArray(25)
  );

  const [sortedArray, setSortedArray] = useState<number[]>([]);

  function handleRandomArray() {
    setSortedArray([]);
    const randomSize = Math.floor(Math.random() * 30);
    setRandomArray(generateRandomArray(randomSize));
  }

  function sortArray(type: string) {
    let sorted: number[] = [];
    switch (type) {
      case 'selectionSort':
        sorted = selectionSort([...randomArray]);
        break;
      case 'insertionSort':
        sorted = insertionSort([...randomArray]);
        break;
      case 'quickSort':
        sorted = quickSort([...randomArray], 0, randomArray.length - 1);
        break;
      case 'mergeSort':
        sorted = mergeSort([...randomArray]);
        break;
      default:
        break;
    }
    setSortedArray(sorted);
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, flexDirection: 'row' }}>
        <button onClick={handleRandomArray}>generate random array</button>
        <button onClick={() => sortArray('selectionSort')}>
          selectionSort
        </button>
        <button onClick={() => sortArray('insertionSort')}>
          insertionSort
        </button>
        <button onClick={() => sortArray('quickSort')}>quickSort</button>
        <button onClick={() => sortArray('mergeSort')}>mergeSort</button>
      </div>
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          gap: 16,
          flexDirection: 'row',
        }}
      >
        <div
          style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}
        >
          <p style={{ margin: 0 }}>unsorted</p>
          <pre>{JSON.stringify(randomArray, null, 2)}</pre>
        </div>
        <div
          style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}
        >
          <p style={{ margin: 0 }}>sorted</p>
          <pre>{JSON.stringify(sortedArray, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
