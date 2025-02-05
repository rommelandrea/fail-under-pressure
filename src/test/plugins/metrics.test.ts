import type { FastifyInstance } from 'fastify';
import { assert, afterEach, describe, suite, test } from 'vitest';
import { build } from '../test-server-builder.js';

let app: FastifyInstance | undefined;

afterEach(async () => {
  if (app) {
    await app.close();
    app = undefined;
  }
});
describe('root route work as expected', () => {
  suite('Happy paths', async () => {
    test('GET /', async () => {
      app = await build();
      const response = await app.inject({
        url: '/metrics',
      });

      assert.deepStrictEqual(response.statusCode, 200);
      assert.deepStrictEqual(
        response.headers['content-type'],
        'text/plain; version=0.0.4; charset=utf-8',
      );
    });
  });
});
