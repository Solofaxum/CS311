"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */

describe("Employee class", function() {
    describe("Constructor method", function() {
        it("Creates an Employee with the given first and last name", function() {
            let emp = new Employee("Jim", "Jones");
            assert.equal(emp.firstName, "Jim");
            assert.equal(emp.lastName, "Jones");
        });
    });
    describe("addEntry(dateStr, amount) method", function() {
        it("Adds an entry to the salaryRecord", function() {
            let emp = new Employee("Jim", "Jones");
            emp.addEntry("1/15/2019", 3005.50);
            emp.addEntry("2/15/2019", 3150.00);
            emp.addEntry("3/15/2019", 4200.00);
            emp.addEntry("4/15/2019", 2988.50);
            assert.equal(emp._salaryRecord.get("1/15/2019"), 3005.50);
            assert.equal(emp._salaryRecord.get("2/15/2019"), 3150.00);
            assert.equal(emp._salaryRecord.get("3/15/2019"), 4200.00);
            assert.equal(emp._salaryRecord.get("4/15/2019"), 2988.50);
        });
    });
    describe("printPaymentAmount(date) method", function() {
        it("returns a string that describes how much this employee was paid on that date", function() {
            let emp = new Employee("Jim", "Jones");
            emp.addEntry("1/15/2019", 3005.50);
            emp.addEntry("2/15/2019", 3150.00);
            emp.addEntry("3/15/2019", 4200.00);
            emp.addEntry("4/15/2019", 2988.50);
            assert.equal(emp.printPaymentAmount("1/15/2019"),"Jim Jones was paid 3005.5 on 1/15/2019");
            assert.equal(emp.printPaymentAmount("2/15/2019"),"Jim Jones was paid 3150 on 2/15/2019");
            assert.equal(emp.printPaymentAmount("3/15/2019"),"Jim Jones was paid 4200 on 3/15/2019");
            assert.equal(emp.printPaymentAmount("4/15/2019"),"Jim Jones was paid 2988.5 on 4/15/2019");
        });
    });
    describe("printAveragePaycheck() method", function(){
        it("Returns a string that describe the average amount paid to this employee", function() {
            let emp = new Employee("Jim", "Jones");
            emp.addEntry("1/15/2019", 3005.50);
            emp.addEntry("2/15/2019", 3150.00);
            emp.addEntry("3/15/2019", 4200.00);
            emp.addEntry("4/15/2019", 2988.50);
            
            assert.equal(emp.printAveragePaycheck(), "Average paycheck for Jim Jones was 3336")
        });
    });
});