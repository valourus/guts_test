import { map } from '.';

export function textToNumbers(text: string): string {
  const arrOfText = text.split('');
  const reservedMap = reverseMap(map);

  return arrOfText
    .map((char, index) => {
      const numbers = reservedMap[char];

      if (numbers.length < 3 && reservedMap[arrOfText[index + 1]]?.includes(numbers.split('')[0])) {
        return numbers + "'";
      }
      return numbers;
    })
    .join('');
}

/**
 * Reverse the map, might cache this later for performance improvements
 * @param the map
 * @returns the reversed map
 */
function reverseMap(map: string[]) {
  const result: Record<string, string> = {};
  map.forEach((value, index) => {
    value.split('').forEach((char, numberOfPressed) => {
      result[char] = duplicateNumber(index, numberOfPressed);
    });
  });
  return result;
}

function duplicateNumber(number: number, amount: number): string {
  let result = '';
  for (var i = 0; i <= amount; i++) {
    result += number.toString();
  }
  return result;
}
