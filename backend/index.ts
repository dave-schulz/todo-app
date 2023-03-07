import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
import bodyParser from 'body-parser';

// Express App
const app: Express = express();
dotenv.config();

// Parse request Body
app.use(bodyParser.json());

// CORS
app.use(cors());

// Database Connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
});

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`The server is listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error: ', err);
  });
