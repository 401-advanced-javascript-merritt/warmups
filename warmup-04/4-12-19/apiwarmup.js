'use strict';

let superagent = require('superagent');

let fetchWithPromise = () => {
  return superagent.get('http://swapi.co/api/people')
  .then(results => {
    return results.body.results.map(item => {
      return superagent.get(item.url);
    });
  })
    .then( res => {
      return Promise.all(res)
      .then(item => {
        let r = [];
        item.forEach(i => {
          res.push(i.body.name);
        })
        return res;
      })
    })
}

fetchWithPromise()
.then(result => {console.log(result)});

let fetchAsync = async () => {
  let people = await superagent.get('https://swapi.co/api/people/');
  let res = people.body.results;

  let results = res.map(item => {
    return superagent.get(item.url);
  });

  let names = await Promise.all(results)
  .then(item => {
    let res = {};
    item.forEach(i => {
      res.push(i.body.name);
    })
    return res;
  })
  return names;
}

fetchAsync().then(res => {console.log(res)});

