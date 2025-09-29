const express = require('express')

const app = express()

app.get("/api/notes",(req,res) => {
    res.status(200).send('You got  5 notes')
})

app.post("/api/notes",(req,res) => {
    res.status(201).json({message: "Created a post successfully"})
})

app.put("/api/notes/:id", (req,res) => {
    res.status(200).json({message: "Note updated successfully"})
})

app.delete("/api/notes/:id",(req,res) => {
    res.status(200).json({messaage: "Note deleted successfully"})
})

app.listen(5001,() => {
    console.log('app listtening on port 5001')
})