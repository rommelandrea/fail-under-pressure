import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

async function routes(fastify: FastifyInstance) {
  fastify.get('', async (request: FastifyRequest, reply: FastifyReply) => {
    return { root: true };
  });
}

export default routes;
