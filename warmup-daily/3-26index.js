'use strict';

let arr = [1,2,3,4,5,6,7,8,9,10];

forloop = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

whileloop = (arr) => {
    let count = 0;
    while(arr[count]){
        console.log(arr[count]);
        count++;
    }
}

maparr = (arr, cb) => {
    let res = [];
    arr.forEach(item => {
        res.push(cb(item));
    });
    return res;
}

filterarr = (arr, cb) => {
    let res = [];
    arr.forEach(item => {
        if(cb(item)){
            res.push(item);
        }
    });
    return res;
}

reducearr = (arr, cb, acc) => {
    let res = acc;
    arr.forEach(i => {
        res += cb(item);
    });
    return res;
}

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {};
let newState = {};