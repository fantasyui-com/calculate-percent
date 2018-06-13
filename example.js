const pct = require('./index.js');

const myAge = 39;
const localMortalityAverage = 77;
const tpl = 'Congratulations you have successfully survived %s% of your journey. ';
const fraction = pct(myAge, localMortalityAverage, 1);
console.log( tpl, (fraction*100) )
