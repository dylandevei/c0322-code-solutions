const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('Dylan');

myPromise.then(value => {
  console.log(value);
});

myPromise.catch(error => {
  console.error(error.message);
});
