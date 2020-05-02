import express from 'express';

import './database';

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'OPA' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
