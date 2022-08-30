import Knex from 'knex'


const db = Knex({
    client: `pg`,
    pool: { min: 0, max: 10 },
    debug: false,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

export default db

