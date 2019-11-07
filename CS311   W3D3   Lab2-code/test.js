"use strict";
/* global describe */
/* global it */
/* global assert */
/* global checkForSum */

let assert = chai.assert;
        function checkForSum(numList, numZ) {
            const myMap = new Map();
            for (const num of numList) {
                myMap.set(numZ - num, num);
            }
            let result = [];
            for (let i = 0; i < numList.length; i++) {
                let current = numList[i];
                if (myMap.has(current)) {
                    result = result.concat([current, myMap.get(current)])
                    return result;
                }
            }
            return -1;
        }
        
describe("checkForSum function", function() {
    it("correctly sees when a sum can be found", function() {
        assert.isTrue(checkForSum([3, 5, 8, 4, 2], 9));
    });
    it("correctly sees when a sum cannot be found", function() {
        assert.isFalse(checkForSum([3, 5, 8, 4], 15));
    });

});

