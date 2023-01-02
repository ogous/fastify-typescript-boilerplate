import type { RouteHandler } from 'fastify'

const handler: RouteHandler = async (req, res) => {
  console.log(req.accepts())

  return res.status(200).send({ success: true })
}

export default handler
