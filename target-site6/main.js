//today forcast is 273 kelvin
// kelvin value remain constant so we use "const"  to define variable 
const kelvin=293;
// celsius is 273 degree less than kelvin
//sub 273 from kelvin to get celsius value
const celsius=kelvin-273;
//use the equation to convert celsius to fahrenhiet
//fahrenhiet= celsius*(9/5)+32
//we use "let" because we will modify fahrenhiet value
let fahrenheit=celsius*(9/5)+32;
fahrenheit=Math.floor(fahrenheit);
console.log(`The Temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton=celsius*(33/100);
newton=Math.floor(newton);
console.log(`The Temperature is ${newton} degrees Newton.`);

