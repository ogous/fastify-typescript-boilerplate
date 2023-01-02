import handler from './handler.js'
import type { FastifyPluginCallback } from 'fastify'

const index: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get(
    '/',
    { onRequest: fastify.basicAuth },
    handler
  )
  console.log(opts)

  done()
}

export default index
