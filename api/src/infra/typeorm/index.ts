import { createConnection } from 'typeorm';

(async function bootTypeORM() {
  try {
    await createConnection();
  } catch (err) {
    console.log({ error: { ...err } })
  }
})()