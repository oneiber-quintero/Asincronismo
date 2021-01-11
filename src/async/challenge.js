const fecthData = require('../utils/fecthData');
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async ( url_api ) => {
    try{

        const data = await fecthData(url_api);
        const character = await fecthData(`${url_api}${data.results[0].id}`);
        const origin = await fecthData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch(error) {
        console.error(error);
    }
};

console.log('Before');
anotherFunction(API);
console.log('After');