import { createClient } from "redis";

const redis = createClient({
    url: process.env.REDIS_DATABASE_URL,
});

export default redis;
