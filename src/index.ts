import fastify, { FastifyInstance } from 'fastify'
import router from './routes'

class API {
    app: FastifyInstance
    constructor() {
        this.app = fastify({ logger: true })

        this.init()
    }

    async init() {
        await this.app.register(router, { prefix: '/api' })
        await this.app.listen(8000)
    }
}

new API()