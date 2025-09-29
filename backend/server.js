const express = require('express')

const app = express()

app.get("/api/notes",(req,res) => {
    res.status(200).send('You got  5 notes')
})

app.listen(5001,() => {
    console.log('app listtening on port 5001')
})