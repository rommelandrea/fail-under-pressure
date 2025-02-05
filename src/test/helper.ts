import fastify from 'fastify';
import fp from 'fastify-plugin';
import buildServer from '../app.js';

declare module 'fastify' {
  interface FastifyInstance {}
}

// Automatically build and tear down our instance
export async function build() {
  const app = fastify({
    ajv: {
      customOptions: {
        coerceTypes: false,
        removeAdditional: 'all',
      },
    },
  });

  app.register(fp(buildServer));

  return app;
}
