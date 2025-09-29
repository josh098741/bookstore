const express = require('express')
const router = express.Router()

router.get("/", (req,res) => {
    res.status(200).send('You got  5 notes')
})

router.post("/",(req,res) => {
    res.status(201).json({message: "Created a post successfully"})
})

router.put("/:id",(req,res) => {
    res.status(200).json({message: "Note updated successfully"})
})

router.delete("/:id",(req,res) => {
    res.status(200).json({messaage: "Note deleted successfully"})
})

module.exports = router