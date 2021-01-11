const fecthData = require('../utils/fecthData');
const API = "https://rickandmortyapi.com/api/character/";


fecthData(API)
    .then((response) => {
        console.log(response.info.count);
        return fecthData(`${API}${response.results[0].id}`);
    })
    .then((response) => {
        console.log(response.name);
        return fecthData(`${response.origin.url}`);
    })
    .then((response) => {
        console.log(response.dimension);
    })
    .catch((err) => {
        console.error(err);
    });
