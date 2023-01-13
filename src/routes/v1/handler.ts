import type { RouteHandler } from 'fastify'
import helper from '#helper/someHelper.js'

const handler: RouteHandler = async (_, res) => {
  return res.status(200).send({ success: helper() })
}

export default handler
