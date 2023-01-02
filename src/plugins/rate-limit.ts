import fp from 'fastify-plugin'
import ratelimit from '@fastify/rate-limit'

export default fp(
  async (fastify) =>
    await fastify.register(ratelimit, {
      max: 2,
      timeWindow: '1 minute'
    })
)
