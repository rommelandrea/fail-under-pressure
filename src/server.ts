import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { fastify } from 'fastify';
import fp from 'fastify-plugin';
import buildServer from './app.js';

const server = fastify({
  logger: true,
  ajv: {
    customOptions: {
      coerceTypes: false,
      removeAdditional: 'all',
    },
  },
}).withTypeProvider<TypeBoxTypeProvider>();

server.register(fp(buildServer));
await server.ready();

server.listen({ host: '0.0.0.0', port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
