const sum = require('./app');
const assert = require('assert');

assert.strictEqual(sum(1, 2), 3, '1 + 2 should be 3');
assert.strictEqual(sum(-1, 1), 0, '-1 + 1 should be 0');

console.log('All tests passed!');