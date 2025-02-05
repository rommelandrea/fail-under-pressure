import { join } from 'node:path';
import fastifyAutoload from '@fastify/autoload';
import type { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default async function buildServer(
  app: FastifyInstance,
  options: FastifyPluginOptions,
) {
  app.decorate('dirname', import.meta.dirname);

  await app.register(fastifyAutoload, {
    dir: join(import.meta.dirname, 'plugins/external'),
    options: { ...options },
  });

  // await app.register(fastifyAutoload, {
  //   dir: join(import.meta.dirname, 'plugins/internal'),
  //   options: { ...options },
  // });

  void app.register(fastifyAutoload, {
    dir: join(import.meta.dirname, 'routes'),
    indexPattern: /.*routes(\.js|\.cjs|\.ts)$/i,
    autoHooksPattern: /.*hooks(\.js|\.cjs|\.ts)$/i,
    autoHooks: true,
    cascadeHooks: true,
    options: { ...options, prefix: '/api/v1' },
    forceESM: true,
  });
}
