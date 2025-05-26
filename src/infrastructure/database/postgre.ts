import "dotenv/config";

import { Pool } from "pg";

const postgre = new Pool({
    connectionString: process.env.POSTGRE_DATABASE_URL,
});

export default postgre;
