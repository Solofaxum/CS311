"use strict";

/**
 * An Employee class
 */
class Employee {
    /**
     * Constructor for Employee
     * @param {String} firstName a firstname
     * @param {String} lastName a lastname
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._salaryRecord = new Map();
    }
    
    /**
     * Adds the arguments to the salary record
     * @param {String} dateStr a string representing a date 
     * @param {Number} amount the amount paid
     * @returns {undefined}
     */
    addEntry(dateStr, amount) {
        this._salaryRecord.set(dateStr, amount);
        if(this._salaryRecord.get(dateStr)){
            return this._salaryRecord.get(dateStr);
        }else{
            return -1;
        }
        // TODO implement
    }

    /**
     * Retrieves a String that describes how much 
     * this Employee was paid on that date
     * @param {String} date a date string
     * @returns {String} text describing how much was paid
     */
    printPaymentAmount(date) {
        if(this._salaryRecord.get(date)){
            return `${this.firstName} ${this.lastName} was paid ${this._salaryRecord.get(date)} on ${date}`
        }else{
            return `${this.firstName} ${this.lastName} did not receive a paycheck on ${date}`
        }
        // TODO implement
    }

    /**
     * Returns a String desribing the average amount paid
     * @returns {String} describes average amount for this Employee
     */
    printAveragePaycheck() {
        // if head = NULL 
            let sum = 0;
            for (const values of this._salaryRecord.values()) {
                sum += values;
            }
            return `Average paycheck for ${this.firstName} ${this.lastName} was ${sum/this._salaryRecord.size}`;
        }
        // TODO implement
    }
