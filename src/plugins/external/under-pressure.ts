import v8 from 'node:v8';
import fastifyUnderPressure from '@fastify/under-pressure';
import type { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

/* start fail code */
// export const autoConfig = {
//   maxEventLoopDelay: 1000,
//   maxHeapUsedBytes: v8.getHeapStatistics().heap_size_limit,
//   maxRssBytes: v8.getHeapStatistics().total_available_size,
//   maxEventLoopUtilization: 0.98,
//   pressureHandler: (
//     _req: FastifyRequest,
//     rep: FastifyReply,
//     type: string,
//     value: number | string | undefined | null,
//   ) => {
//     rep
//       .status(503)
//       .send(
//         `System is under pressure. Pressure type: ${type}. Pressure value: ${value}`,
//       );
//   },
//   exposeStatusRoute: {
//     routeOpts: {
//       logLevel: 'warn',
//     },
//     routeSchemaOpts: {
//       // If you also want to set a custom route schema
//       hide: true,
//     },
//     url: '/alive', // If you also want to set a custom route path and pass options
//   },
// };
/* end fail code */

// export default fastifyUnderPressure;
export default fp(async (fastify, opts) => {
  const healthCheck = opts;

  fastify.register(fastifyUnderPressure, {
    maxEventLoopDelay: 1000,
    maxHeapUsedBytes: v8.getHeapStatistics().heap_size_limit,
    maxRssBytes: v8.getHeapStatistics().total_available_size,
    maxEventLoopUtilization: 0.98,
    pressureHandler: (
      _req: FastifyRequest,
      rep: FastifyReply,
      type: string,
      value: number | string | undefined | null,
    ) => {
      rep
        .status(503)
        .send(
          `System is under pressure. Pressure type: ${type}. Pressure value: ${value}`,
        );
    },
    exposeStatusRoute: {
      routeOpts: {
        logLevel: 'warn',
      },
      routeSchemaOpts: {
        // If you also want to set a custom route schema
        hide: true,
      },
      url: '/alive', // If you also want to set a custom route path and pass options
    },
  });
});
