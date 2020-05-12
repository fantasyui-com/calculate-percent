module.exports = function (val, max, min=0){
const range = Math.abs(max-min);
const value = val - min;
let percent = (100.0 * parseFloat(value) / parseFloat(range)) / 100;
return  parseInt(percent * 100);
}
