"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */

describe("nameComparator", function() {
    it("Compares Employees by name", function() {
        assert.equal(employees.sort(nameComparator)[0].name, "Dave");
    });
});

describe("salaryComparator", function() {
    it("Compares Employees by salary", function() {
        assert.equal(employees.sort(salaryComparator)[0].salary, 40000);
    });
});

describe("hireDateComparator", function() {
    it("Compares Employees by Date of Hire", function() {
        assert.equal(employees.sort(hireDateComparator)[0].name, "George");
    });
});
    