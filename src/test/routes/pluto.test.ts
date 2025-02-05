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
        url: '/api/v1/pluto',
      });

      assert.deepStrictEqual(response.statusCode, 200);
      assert.isObject(response.json());
      assert.deepStrictEqual(response.json(), { root: true });
    });
  });
});
