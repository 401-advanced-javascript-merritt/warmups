'use-strict';

let arr = [1,2,3,4,5,6,7,8,9,10];

forLoop = (arr) => {
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

whileLoop = (arr) => {
    let count = 0;
    while(arr[count]){
        console.log(arr[count]);
        count++;
    }
}

mapArr = (arr, cb) => {
    let res = [];
    arr.forEach(item =>{
        res.push(cb(item));
    })
    return res;
}

filterArr = (arr, cb) => {
    let res = [];
    arr.forEach(item =>{
        if(cb(item)){
            res.push(item)
        }
    })
    return res;
}
//15 mins

reduceArr = (arr, cb, acc) => {
    let res = acc
    arr.forEach(item => {
        res += cb(item);
    })
    return res;
}

mapTest = (x) =>{
    return x*2;
}
filterTest = (x) => {
    if(x <= 5){
        return x;
    }
}
reduceTest = (x) => {
    return x+1;
}
forLoop(arr);
whileLoop(arr);

forLoop(mapArr(arr, mapTest));
forLoop(filterArr(arr, filterTest));
console.log(reduceArr(arr, reduceTest, 100));


const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = { ...stuff.cars['Honda'] }; // Time boxing daily warm up.
let newState = {};

forLoop(newPeople);