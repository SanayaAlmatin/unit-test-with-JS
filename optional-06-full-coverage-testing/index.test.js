import { strict as assert } from 'node:assert';
import test from 'node:test';
import sum from './index.js';

test('sum() should return the correct sum for valid positive numbers', () => {
  assert.equal(sum(5, 10), 15);  // 5 + 10 = 15
  assert.equal(sum(0, 0), 0);    // 0 + 0 = 0
  assert.equal(sum(100, 200), 300); // 100 + 200 = 300
});

test('sum() should return 0 if either argument is negative', () => {
  assert.equal(sum(-1, 5), 0);   // Negative value should return 0
  assert.equal(sum(10, -2), 0);  // Negative value should return 0
  assert.equal(sum(-3, -7), 0);  // Both negative should return 0
});

test('sum() should return 0 if either argument is not a number', () => {
  assert.equal(sum('5', 10), 0); // String instead of number, should return 0
  assert.equal(sum(10, '5'), 0); // String instead of number, should return 0
  assert.equal(sum(null, 5), 0); // Null should return 0
  assert.equal(sum(5, undefined), 0); // Undefined should return 0
  assert.equal(sum({}, 10), 0); // Object should return 0
  assert.equal(sum(10, []), 0); // Array should return 0
});

test('sum() should return 0 for missing arguments', () => {
  assert.equal(sum(5), 0);  // Only one argument, should return 0
  assert.equal(sum(), 0);   // No arguments, should return 0
});
