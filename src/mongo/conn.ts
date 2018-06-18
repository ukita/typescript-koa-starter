interface ConnParams {
  host: string
  port: string
  database: string
  username?: string
  password?: string
}

export const buildConnectionURI = ({ host, port, database, username, password }: ConnParams): string => {
  let uri = 'mongodb://'

  if (username && password) {
    uri = `${uri}:${username}:${password}@`
  }

  uri = `${uri}${host}`

  if (port) {
    uri = `${uri}:${port}`
  }

  if (database) {
    uri = `${uri}/${database}`
  }

  return uri
}
