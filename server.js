const express = require("express")
var cors = require('cors')

const app = express()

app.use(cors())
app.use("/session/", require("./routes/sessionRoute"))

app.listen(3001, function(){
    console.log("server in por 3001")
})