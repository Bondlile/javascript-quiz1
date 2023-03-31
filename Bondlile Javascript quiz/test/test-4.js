const chai = require("chai");
const assert = chai.assert;
const SeriesSum = require("../quiz-4")

chai.config.truncateThreshold=0;

describe("SeriesSum", () => {
  it("returns the sum of following series upto nth term(parameter)", () => {
    assert.strictEqual(SeriesSum(1), "1.00")
  assert.strictEqual(SeriesSum(2), "1.25")
  assert.strictEqual(SeriesSum(3), "1.39")
  assert.strictEqual(SeriesSum(4), "1.49")
  });
});