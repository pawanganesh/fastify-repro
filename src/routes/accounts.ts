import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import Accounts from '../controllers/accounts'
import { createResponse } from '../helpers'
import Authenticator from '../authentication'

export default async function (app: FastifyInstance, opts?: FastifyPluginOptions) {
    app.register(Authenticator)

    app.route({
        method: 'GET',
        url: '/get',
        schema: {
            response: createResponse([200, 500])
        },
        handler: Accounts.get
    })
}