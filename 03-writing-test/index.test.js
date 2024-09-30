import {
  test
} from 'node:test';
import assert from 'node:assert';

import {
  sum
} from './index.js';

test('sum should return the correct sum of two numbers', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
  assert.strictEqual(sum(-2, 3), 1, '-2 + 3 should equal 1');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sum(-2, -3), -5, '-2 + -3 should equal -5');
});