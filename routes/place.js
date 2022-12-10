const axios = require('axios');
const express = require('express')
const router = express.Router()
const API_KEY = "AIzaSyA1Tzn-ht200j2A3duM8uIDjuGDT7W1LF0" ;

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.post('/', (req, res) => {

  const search = req.body.search ;
  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=${API_KEY}`,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
   // console.log(JSON.stringify(response.data));
   var placeName = response.data.results[0].name ;
   var address = response.data.results[0].formatted_address ;
   var photoLink = response.data.results[0].photos[0].photo_reference ;
   var photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${photoLink}&key=${API_KEY}` ;
    res.json({"name" : placeName, "address" : address, "photo" : photo}) ;
  })
  .catch(function (error) {
    console.log(error);
  });
})

module.exports = router