import { it } from 'node:test';

/**
 * @param {string} name
 * @param {Function} fn
 * @returns {void}
 */
export function optional(name, fn) {
  it(name, (ctx) => {
    try {
      fn();
    } catch (error) {
      if (error && error.message === 'Not implemented') {
        ctx.skip();

        return;
      }

      throw error;
    }
  });
}
