import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import fp from 'fastify-plugin'

export default fp(async function (app: FastifyInstance) {
    app.decorateRequest('user', {})
    app.addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
        // HANDLE AUTH CHECKS HERE....

        request.user = {
            email: 'example@some.example',
            admin: true
        }

        return
    })
})