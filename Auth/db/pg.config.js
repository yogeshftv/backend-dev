const { Pool } = require("pg");

async function connectDB() {
    try {
        const pool = new Pool({
            host: process.env.PG_HOST,
            user: process.env.PG_USER,
            port: process.env.PG_PORT,
            database: process.env.PG_DATABASE,
            password: process.env.PG_SECRET,
            max: 20,
            connectionTimeoutMillis: 0,
            idleTimeoutMillis: 0,            
        });
        await pool.connect();
        console.log(`PostgreSQL Database Connected Successfully...`);
    } catch (err) {
        console.log(`PostgreSQL Database Connection Failed: ${err}`);
        process.exit(1);
    }
}

module.exports = { connectDB };