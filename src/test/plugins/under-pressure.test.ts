import fastify, {} from 'fastify';
import { beforeEach, describe, expect, it } from 'vitest';
import fastifyUnderPressure, {
  autoConfig,
} from '../../plugins/external/under-pressure.js';

describe('Under Pressure Plugin', () => {
  let app;

  beforeEach(() => {
    app = fastify();
    app.register(fastifyUnderPressure, autoConfig);
  });

  it('should register the /alive route', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/alive',
    });

    expect(response.statusCode).toBe(200);
  });

  // it('should return 503 when system is under pressure', async () => {
  //   // Simulate system under pressure
  //   autoConfig.pressureHandler(
  //     {} as FastifyRequest,
  //     {
  //       status: (code: number) => ({
  //         send: (message: string) => {
  //           expect(code).toBe(503);
  //           expect(message).toContain('System is under pressure');
  //         },
  //       }),
  //     } as FastifyReply,
  //     'heapUsed',
  //     'high',
  //   );
  // });
});
