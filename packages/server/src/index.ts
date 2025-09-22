import express from 'express';

import about from './router/about';

const CONST_HOST = 3000;

const app = express();

app.use('/about', about);

app.listen(CONST_HOST, () => {
  console.log(`listening port ${CONST_HOST}`);
});
