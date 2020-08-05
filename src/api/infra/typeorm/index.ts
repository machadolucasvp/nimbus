import { createConnection } from 'typeorm';

(async function bootTypeORM() {
  try {
    await createConnection();
    console.log('criei')
  } catch (err) {
    console.log({ error: { ...err } })
  }
})()