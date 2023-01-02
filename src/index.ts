import autoLoad from '@fastify/autoload'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fastify from 'fastify'
import * as dotenv from 'dotenv'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dir = dirname(__filename)
const port = Number(process.env.PORT ?? '3001')
const environment = process.env.NODE_ENV ?? 'development'

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
      }
    }
  },
  production: true,
  test: false
}

const server = fastify({
  logger: envToLogger[environment]
}).withTypeProvider<TypeBoxTypeProvider>()

async function prepare() {
  try {
    await server.register(autoLoad, {
      dir: join(__dir, 'plugins'),
      forceESM: true
    })
    await server.register(autoLoad, {
      dir: join(__dir, 'routes'),
      forceESM: true
    })
  } catch (e) {
    console.error(e)
    server.log.error(e)
    process.exit(1)
  }
}

await prepare()

server.listen({ port, host: '0.0.0.0' }, (e) => {
  if (e) {
    console.error(e.message)
    server.log.error(e)
    process.exit(1)
  } else {
    console.log('Server started Port:', port, 'Env:', environment)
  }
})
