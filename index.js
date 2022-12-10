const dotenv = require('dotenv') ;
const express = require('express') ;
const bodyParser = require('body-parser') ;
const app = express() ;
dotenv.config() ;
const port = 3000 ;


const placeRouter = require('./routes/place') ;
const game24Router = require('./routes/game24') ;
const authRouter = require('./routes/auth') ;
const tictacRouter = require('./routes/tictac') ;

app.use(bodyParser.json()) ;
app.use("/places", placeRouter) ;
app.use("/game24", game24Router) ;
app.use("/auth", authRouter) ;
app.use("/tictactoe", tictacRouter) ;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})