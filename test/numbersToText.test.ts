import { numbersToText } from '../src/numbersToText';

describe('numbersToText test', () => {
  it.each`
    numbers                         | expected
    ${'96667773'}                   | ${'word'}
    ${'4433555555666096667775553'}  | ${'hello world'}
    ${'222222222222'}               | ${'cccc'}
    ${'22\'266'}                    | ${'ban'}
  `('converts $numbers to $expected', ({ numbers, expected }) => {
    const result = numbersToText(numbers);
    expect(result).toBe(expected);
  });
});
