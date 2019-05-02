'use strict'

let arr = [1,2,3,4,5,6,7,8,9,10];

let forLoop = (arr) => {
  for(let i = 0; i < arr.length; i ++){
    console.log(arr[i]);
  }
}

let whileLoop = (arr) => {
  let count = 0;
  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
}

let map = (arr, cb) => {
  let res = [];
  arr.forEach(item => {
    res.push(cb(item));
  });
  return res;
}

let filter = (arr, cb) => {
  let res = [];
  arr.forEach(i => {
    res.push(cb(i));
  });
  return res;
}

let reduce = (arr, cb, initial) => {
  for(let i = 0; i < arr.length; i++){
    initial = cb(initial, arr[i], i);
  }
  return intial;
}

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [ 'Odie', ...stuff, 'Garfield'];

let newStuff = { tv, radio, toothbrush, cars: [...cars,'Honda']};
console.log(newStuff);
let newState = {};

//Timebox