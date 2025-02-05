import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import type { FastifyReply, FastifyRequest } from 'fastify';

const pippoRoute: FastifyPluginAsyncTypebox = async (
  fastify,
  _opts,
): Promise<void> => {
  fastify.get('/', async (_request: FastifyRequest, _reply: FastifyReply) => {
    return { root: true };
  });
};

export default pippoRoute;
