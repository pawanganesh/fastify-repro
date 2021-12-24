declare module 'fastify' {
    interface FastifyRequest {
        user: {
            email: string,
            admin: boolean
        }
    }
}