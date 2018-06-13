# calculate-percent
Tiny easy to find percentage calculator that returns a fraction of 1, with customizable precision. [Algorithm, Math]

```JavaScript
const pct = require('./index.js');

const myAge = 39;
const localMortalityAverage = 77;
const tpl = 'Congratulations you have successfully survived %s% of your journey. ';
const fractionOfOne = pct(myAge, localMortalityAverage, 1);

console.log( tpl, (fractionOfOne*100) )

```

```bash

Congratulations you have survived 50% of your journey.


```
