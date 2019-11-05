"use strict"

                                                       //HOME WORk ASSIGNMENTS

// QUESTION 1.1;-
//Write a Recursive Version
//Write a recursive version of the following function that sum all the elements in an array:

// function sum(array) {
//     let sum = 0;
//     for (const num of array) {
//         sum += num;
//     }
//     return sum;
// }

//Answer:
function Sum(array) {
    if (array.length === 1) {
        return array[0];
    }
    return array.pop() + Sum(array);
}
let myArray = [1, 2, 3, 4, 5];
let result = Sum(myArray);
console.log(result);



// QUESTION 1.2.;-
//Undo Recursion
//Write a non-recursive version of the following function which returns the min element in an array:
// function min(array) {
//     if (array.length > 1) {
//         let other = min(array.splice(1));
//         if (other < array[0]) {
//             return other;
//         }
//     }
//     return array[0];
// }

//Answer:
function min(array) {
    let other = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < other) {
            other = array[i];
        }
    }
    return other;
}
// let myArray= [1,2,3,-4,5];
// let result = min(myArray);
// console.log (result);





// QUESTION Number 2:
// creating a SymbolBalancer class with a constructor that takes a string (containing program text), 
// and a method isBalanced(delimiters) that checks if the passed in delimiters are balanced in the program text.
    
class SymbolBalancer {
    constructor(text) {
        this.text = text;
        this.stack = new Stack();
    }

isBalanced(delimiters) {
    let stack = [];
    let str = ["solomon"];
    //iterate through all the string characters
    for (let i = 0; i < delimiters.length; i++) {
        let char = str.charAt(i);
        //for an opening paren, push it in the stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            //peek at the stack to see if there is a opening paren for it
            if (stack.length === 0) {
                return false;
            } else if (char === "(" && peek(stack) === ")" ||
                char === "{" && peek(stack) === "}" ||
                char === "[" && peek(stack) === "]") {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
}




// Qustion 3.1.
//Number 3: Regular Stack
// What does the call stack look like(very similar to what I showed on the slides) when execution
// reaches the “what does the stack look like here ?” comment.
// "use strict";
// function a(x, y) {
//     let n = x - y;
//     let m = x + y;
//     return b(n, m);
// }
// function b(x, y) {
//     let something = x / 2;
//     let other = y + 3;
//     let stuff = c(something + other);
//     return (stuff + something) / other;
// }
// function c(n) {
//     let m = n * 3;
//     debugger;
//     // what does the stack look like here?
//     return m - 1;
// }
// console.log(a(3, 4));

//////////////////////////////////////////////////////////////////////////////////////////////
//Answer:
stack c
{ m = n * 3 = 9.5 * 3= 28, 5 }

//Stack b
{
    somthing = -1 / 2 = -0.5;
    other = 7 + 3 = 10;
    stuff = ???;
}

//Stack a
{
    n = 3 - 4 = -1;
    m = 3 + 4 = 7;
}

//////////////////////////////////////////////////////////////////////////////////////////////



// QUESTIO 3.2.
// Recursion Stack
// What does the call stack look like when execution first reaches the if statement (see next page, where I
// also added the comment ‘break here’).
// function min(array) {
// if (array.length > 1) {
// let other = min(array.splice(1));
// if (other < array[0]) { // break here
// return other;
// }
// }
// return array[0];
// }
// console.log(min([3,5,2]));

//////////////////////////////////////////////////////////////////////////////////////////////
// Answer:
//Third stack
other = min([2])

// Second stack 
other = min([5, 2])

// First stack
other = min([3, 5, 2])

//////////////////////////////////////////////////////////////////////////////////////////////


