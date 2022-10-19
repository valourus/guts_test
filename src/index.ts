import { textToNumbers } from './textToNumbers';
import express from 'express';
import { numbersToText } from './numbersToText';

export const map = [' ', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

const app = express();
const port = 3000;

app.post('/api/numbers/:number', (req, res) => {
  res.json({ data: numbersToText(req.params.number) });
});

app.post('/api/text/:text', (req, res) => {
  res.json({ data: textToNumbers(req.params.text) });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
