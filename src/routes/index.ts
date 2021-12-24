import { FastifyInstance } from 'fastify'

import Accounts from './accounts'

export default async function (app: FastifyInstance) {
    app.register(Accounts, { prefix: '/accounts' })
}