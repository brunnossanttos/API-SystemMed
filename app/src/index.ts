import express, { Express } from 'express';

import routes from './routes';
import { MongoStrategy } from './infra/database/mongoStrategy';
import { configDotenv } from 'dotenv';

configDotenv();

const app: Express = express();

app.use(express.json());

const port: number = 80;

app.use('/api/v1', routes);

const mongoUri: string = process.env.MONGO_URI + '';
const mongoStrategy = new MongoStrategy(mongoUri);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!!!`);
  await mongoStrategy.connect();
});
