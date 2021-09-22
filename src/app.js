import getData from './lib/service.js'

//The result is returned according to the submitted userId.
const data = await getData(5);
console.log(data);