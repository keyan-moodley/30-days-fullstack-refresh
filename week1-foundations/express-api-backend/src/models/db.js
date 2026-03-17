import Pool from "pg";

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "fullstack_refresh",
    password: "123456",
    port: 5432
});

module.exports = pool;