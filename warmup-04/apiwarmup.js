'use strict';

let superagent = require('superagent');

let fetchPeopleWithPromises = () => {
  return superagent.get('https://swapi.co/api/people/')
  .then(results => {
    // console.log(results.body);
    return results.body.results.map(item => {
      return superagent.get(item.url);
    });
  })
  .then( resUrls => {
    return Promise.all(resUrls)
      .then(item => {
        let res = [];
        item.forEach(i => {
          res.push(i.body.name);
        })
        return res;
        // console.log(item.body.name);
      })
  })
}

fetchPeopleWithPromises()
  .then(res => {
    console.log(res)
  });


let fetchPeopleAsync = async () => {
  let people = await superagent.get('https://swapi.co/api/people/');

  let res = people.body.results;

  let results = res.map(item => {
    return superagent.get(item.url);
  });

  let names = await Promise.all(results)
  .then(item => {
    let res = [];
    item.forEach(i => {
      res.push(i.body.name);
    })
    return res;
  })
  return names;
}

fetchPeopleAsync().then(res => { console.log(res)});