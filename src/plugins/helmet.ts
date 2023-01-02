import fp from 'fastify-plugin'
import helmet from '@fastify/helmet'

export default fp(
  async (fastify) => await fastify.register(helmet, { global: true })
)
