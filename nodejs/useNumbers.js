const numModule = require('./numbers');

console.log(numModule.b);

// Destructuring the module
const {a, c} = require('./numbers'); 

const cSquared = c.map(function(value){
    return value * value;
});
console.log( cSquared.join(','));