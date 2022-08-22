import type { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
    },
  },
  staging: {},
  production: {},
}

export default config
