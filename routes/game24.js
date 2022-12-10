const express = require('express')
const fc = require('../common/function') ;
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  const headers = req.headers ;

  if(headers["api-key"] ){
    return next() ;
  }
  
    return res.json({"status" : "unauthorized"}) ;
})
// define the home page route
router.post("/", (req, res) => {
    const {numbers} = req.body ;
    const answer = fc.solveFor(24, numbers[0], numbers[1], numbers[2], numbers[3]) ;
    
    if(answer){
        return res.json({"status" : "YES"}) ;
    }
    return res.json({"status" : "NO"}) ;
    
}) ;



module.exports = router