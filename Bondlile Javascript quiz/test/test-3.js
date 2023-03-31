const chai = require("chai");
const assert = chai.assert;
const maskify = require("../quiz-3")

chai.config.truncateThreshold=0;

describe("maskify", () => {
  it("Changes all but the last four characters into '#'", () => {
    assert.strictEqual(maskify('4556364607935616'), '############5616');
    assert.strictEqual(maskify('1'), '1');
    assert.strictEqual(maskify('11111'), '#1111');
  });
});