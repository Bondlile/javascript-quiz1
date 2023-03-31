const chai = require("chai");
const assert = chai.assert;
const sumOfDifferences = require("../quiz-5")

chai.config.truncateThreshold=0;

describe("sumOfDifferences", () => {
    it("Return the sum of the differences between consecutive pairs in the array in descending order", function() {
        assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
        assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);
    });
});