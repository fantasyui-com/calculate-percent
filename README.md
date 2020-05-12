# calculate-percent
Tiny easy to find percentage calculator that returns a simple integer [Algorithm, Math]

```JavaScript
const calculatePercentSimple = require('calculate-percent/simple.js');

const val = 50;
const max = 100;

console.log( calculatePercentSimple(val, max) ); // -> 50

```

Please note that min is optional and zero by default

```JavaScript
const calculatePercent = require('calculate-percent');

const val = 0;
const min = -100;
const max = 100;

console.log( calculatePercent(val, max, min) ); // -> 50

```

## Breaking API Changes in 2.x

I felt that returning a fraction, and asking for precision was making things too difficult.
I think it is best to simply pct(250, 1000) and be done with it. In the rare case that one is not working with zero we add the min: pct(250,1000,-1000).
