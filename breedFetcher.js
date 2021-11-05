const request = require('request');
let breed = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
const fetchBreedDescription = function(breedName, callback) {
  request(url,(error,response,body)=>{
    if (error) {
      callback(error,null);
    }
    const breed = body && JSON.parse(body)[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback('breed Unavaliable');
    }
  });
};
module.exports = {fetchBreedDescription};