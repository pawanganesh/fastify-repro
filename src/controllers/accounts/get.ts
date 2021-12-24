import { FastifyRequest, FastifyReply } from "fastify";

export default async function (request: FastifyRequest, reply: FastifyReply) {
    return request.user
}