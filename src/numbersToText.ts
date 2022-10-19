import { map } from '.';

/**
 * Interface to keep track of the users input
 */
interface KeyInput {
  keyPresses: number;
  numberPressed: number;
}

/**
 * Convert numbers to text
 * @param numbers The phone input
 * @returns The word that was written
 */
export function numbersToText(numbers: string) {
  const arrOfNumbers = numbers.split('');
  const data: KeyInput[] = [];

  for (let i = 0; i < arrOfNumbers.length; ) {
    if(arrOfNumbers[i] === '\'') {
      i++;
      continue;
    }

    let times = isNextEqual(arrOfNumbers, i);
    times = times > 3 ? 3: times;
    

    data.push({ keyPresses: times, numberPressed: Number(arrOfNumbers[i]) });
    i += times;
  }

  return data.map(({ keyPresses, numberPressed }) => map[numberPressed].charAt(keyPresses - 1)).join('');
}

/**
 * 
 * @param arr Array of numbers
 * @param index from where to start counting
 * @returns the total amount of the same number in a row
 */
function isNextEqual(arr: string[], index: number): number {
  let total = 0;
  if (arr[index] === arr[index + 1]) {
    total = isNextEqual(arr, index + 1);
  }
  return total + 1;
}
