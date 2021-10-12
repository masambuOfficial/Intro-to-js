const upperCaseModule = require('./uppercase');
const companyName = 'Winopay Ltd';

console.log('Before using the module');
console.log(companyName);
console.log('After using the module');
console.log(upperCaseModule.toU(companyName));