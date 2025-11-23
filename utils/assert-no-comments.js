import assert from 'node:assert';

function isCommented(fn) {
  return /\/\/|\*(?=\/)/g.test(fn.toString());
}

export function assertNoComments(fn) {
  assert.strictEqual(
    isCommented(fn),
    false,
    'Be sure to remove comments from the final solution'
  );
}
