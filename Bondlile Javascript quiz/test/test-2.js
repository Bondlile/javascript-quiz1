// https://www.chaijs.com/api/assert/
const chai = require("chai");
const assert = chai.assert;
const quarterOf = require("../quiz-2")

chai.config.truncateThreshold=0;

describe("quarterOf", () => {
  it("Return quarter of year for a specific month", () => {
    assert.strictEqual(quarterOf(3), 1);
    assert.strictEqual(quarterOf(8), 3);
    assert.strictEqual(quarterOf(11), 4);
  });
});