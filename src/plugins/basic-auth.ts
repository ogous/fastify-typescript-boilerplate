import fp from 'fastify-plugin'
import basicAuth from '@fastify/basic-auth'

export default fp(
  async (fastify) =>
    await fastify.register(basicAuth, {
      validate(username, password, req, reply, done) {
        console.log(req.headers)
        if (
          username === process.env.ADMIN_USER &&
          password === process.env.ADMIN_PASSWORD
        ) {
          done()
        } else {
          reply.unauthorized()
        }
      },
      authenticate: true
    })
)
