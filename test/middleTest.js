
const assert = require('chai').assert;
const middle = require('../middle')

describe("#middle", () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it("returns [5] for [1,2,3,4,5,6,7,8,9]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
  });
});