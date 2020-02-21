interface Config {
  admin: string[],
  bot: {
    token: string,
    prefix: string,
    shard: {
      respawn: boolean,
      count: string | number
      delay: number
    }
  },
  db: {
    host: string,
    port: number,
    database: string,
    user: string,
    password: string
  }
}
