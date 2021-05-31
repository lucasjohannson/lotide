// const assertEqual = require('../assertEqual');
const tail = require('../tail');
// // TEST CODE
// assertEqual(tail([5,6,7]), 6);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);


const assert = require('chai').assert;
// const head   = require('../head');

describe("#tail", () => {
  it("returns [6,7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5,6,7]), [6,7]);
  });

  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"] );
  });

  

});