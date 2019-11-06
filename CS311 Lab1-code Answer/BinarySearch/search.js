/* eslint-disable require-jsdoc */
"use strict";

// eslint-disable-next-line no-unused-vars


function linearSearch(value, array){
    for(let i = 0; i < array.length; i++){
    if(array[i] === value) return i;
    }
    return -1;
    }

function binarySearch(value, array) {
    let begin = 0;
    let end = array.length;
    while (end - begin > 1) {
        let middle = Math.floor( (begin+end)/2 );
        if (array[middle] > value) {
            end = middle;
        } else {
            begin = middle;
        }
    }
    if (value === array[begin]) {
        return begin;
    } else {
        return -1;
    }

}

function bubbleSort(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j+1]) {
                let temp = a[j];
                a[j] = a[j + 1]
                a[j + 1] = temp;
            }
        }
    }
}

function insertionSort(a) {
    for (let sorted = 1; sorted < a.length; sorted++) {
        let consider = sorted;
        for (let compare = sorted -1; compare >= 0; compare--) {
            if (a[consider] < a[compare]) {
                let temp = a[consider];
                a[consider] = a[compare];
                a[compare] = temp;
                consider--;
            } else {
                break;
            }
        }
    }
}