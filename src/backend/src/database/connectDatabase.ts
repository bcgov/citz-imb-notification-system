import { Client } from 'pg';

const client = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT),
});

const delayConnect = (): void => {
  setTimeout(() => {
    client
      .connect()
      .then(() => console.log('Connected to the database.'))
      .catch((err) => console.error('Failed to connect to the database:', err));
  }, 5000);
};

delayConnect();

export default client;
