// connection with postgreSql
const Pool = require('pg').Pool;

const pool = new Pool({
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    // database: process.env.DB_DATABASE
    user: "postgres",
    password: "1517",
    host: "localhost",
    port: "5432",
    database: "postgres"
})

module.exports = pool;

