import "dotenv/config";

import { Pool } from "pg";

const db = new Pool({
    user: process.env.POSTGRE_USER,
    host: process.env.POSTGRE_HOST,
    database: process.env.POSTGRE_DB,
    password: process.env.POSTGRE_PASSWORD,
    port: Number(process.env.POSTGRE_PORT),
});

export default db;
