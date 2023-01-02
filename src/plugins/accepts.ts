import fp from 'fastify-plugin'
import accepts from '@fastify/accepts'

export default fp(async (fastify) => await fastify.register(accepts))
