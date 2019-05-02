'use strict';

let arr = [1,2,3,4,5,6,7,8,9,10];

let forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}


let whileLoop = (arr) => {
  let i = 0;
  while (i < arr.length){
    console.log(arr[i]);
    i++;
  }
}

let map = (arr, cb) => {
  let res = [];
  for(let i = 0; i < arr.length; i++){
    res.push(cb(arr[i]));
  }
  return res;
}

let filter = (arr, cb) => {
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      res.push(arr[i]);
    }
  }
  return res;
}

let reduce = (arr, cb, newI) => {
  for(let i = 0; i < arr.length; i++){
    newI = cb(newI, arr[i], i)
  }
  return newI;
}

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars:[...stuff.cars, 'Honda']};
let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'Honda']}};
