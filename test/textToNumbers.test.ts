import { textToNumbers } from "../src/textToNumbers";

describe('textToNumbers', () => {
  
  it.each`
  text                            | expected
  ${'word'}                       | ${'96667773'}
  ${'hello world'}                | ${'4433555555666096667775553'}
  ${'cccc'}                       | ${'222222222222'}
  ${'ban'}                        | ${'22\'266'}
  `('converts $numbers to $expected', ({ text, expected }) => {
    const result = textToNumbers(text);
    expect(result).toBe(expected)
  });
});
