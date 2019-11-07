"use strict";
/* global describe */
/* global it */
/* global assert */
/* global removeDups */

function removeDups(arr){
    return [...new Set(arr)];
}
describe("removeDups(numList) function", function() {
    it("correctly removes duplicates", function() {
        const output = removeDups([1, 3, 4, 6, 2, 4, 3, 1, 8, 5, 6]);
        assert.equal(output[0], 1);
        assert.equal(output[1], 3);
        assert.equal(output[2], 4);
        assert.equal(output[3], 6);
        assert.equal(output[4], 2);
        assert.equal(output[5], 8);
        assert.equal(output[6], 5);
        assert.equal(output.length, 7);
    });
});