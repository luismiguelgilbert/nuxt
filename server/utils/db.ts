import { Pool } from "pg";

const db = new Pool({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWD,
  idleTimeoutMillis: 60 * 1000 * 5, // 5 minutes
  connectionTimeoutMillis: 30 * 1000, // 30 seconds
  max: 20, // 20 connections
});

// Optional: Handle errors on idle clients
db.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  // process.exit(-1); // Exit the process in case of a critical error
});

db.on('connect', ()=> console.log('connected..'));

export default db;