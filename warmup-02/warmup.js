'use strict';

const superagent = require('superagent');

function fetchPeopleWithPromises(){
  superagent.get('https://swapi.co/api/people/')
    .then(results => {
      //console.log(results.body);
      let res = results.body.results.reduce((items, person) => {
        items.push(person.url); return items
      }, []);

      let arr = res.map( item => Promise.resolve(superagent.get(item)))
      
      return Promise.all(arr)
        .then(res => {
          res.map(item => {
            console.log(item.body.name);
          });
        })
    })
}
fetchPeopleWithPromises();