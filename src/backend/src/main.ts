import express, { Request, Response } from 'express';
import client from '@/database/connectDatabase';

type TimeRow = {
  now: string;
};

const app = express();
const port = Number(process.env.BACKEND_PORT);

app.use(express.json());

app.get('/api', (_req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

// Route to check database connection and fetch the current time
app.get('/api/db-check', (_req: Request, res: Response) => {
  client
    .query<TimeRow>('SELECT NOW()')
    .then((dbResponse) => {
      const currentTime = dbResponse.rows[0].now;
      res.json({
        message: 'Database connection successful',
        time: currentTime,
      });
    })
    .catch((error: Error) => {
      console.error('Database query failed:', error);
      res.status(500).json({
        message: 'Database query failed',
        error: error.message,
      });
    });
});

app.listen(port), '::', () => console.log(`Server listening on [::]:${port}`);
