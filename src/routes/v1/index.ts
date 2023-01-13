import handler from './handler.js'
import type { FastifyPluginCallback } from 'fastify'

const index: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get('/', { onRequest: fastify.basicAuth }, handler)

  done()
}

export default index
