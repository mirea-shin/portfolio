import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import about from './router/about';

const CONST_HOST = 3000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/about', about);

app.listen(CONST_HOST, () => {
  console.log(`listening port ${CONST_HOST}`);
});
