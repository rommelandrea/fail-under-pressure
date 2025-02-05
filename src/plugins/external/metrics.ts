import metricsPlugin, { type IMetricsPluginOptions } from 'fastify-metrics';
import fp from 'fastify-plugin';

export const autoConfig: Partial<IMetricsPluginOptions> = {
  endpoint: '/metrics',
};

/**
 * This plugins enables the use of CORS.
 *
 * @see {@link https://github.com/SkeLLLa/fastify-metrics}
 */
// export default metricsPlugin;

export default fp(metricsPlugin.default, {
  name: 'metrics',
});
