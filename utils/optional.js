import { it } from 'node:test';

/**
 * @param {string} name
 * @param {(ctx:import('node:test').TestContext) => void} fn
 * @returns {void}
 */
export function optional(name, fn) {
  it(name, (ctx) => {
    try {
      fn(ctx);
    } catch (error) {
      if (error && error.message === 'Not implemented') {
        ctx.skip();

        return;
      }

      throw error;
    }
  });
}
