const { Pool } = require('pg'); // Import Pool from pg, pool is a class for creating a pool of connections to the database
require('dotenv').config();     // load .env file into process.env

const pool = new Pool({          // Create a new pool of connections to the database
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = pool;           // Export the pool so it can be used in other files
