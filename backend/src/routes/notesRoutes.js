const express = require('express')
const router = express.Router()

const {
    getAllNotes,
    createANote,
    updateANote,
    deleteANote
} = require('../controllers/notesController')

router.get("/",getAllNotes)

router.post("/",createANote)

router.put("/:id",updateANote)

router.delete("/:id",deleteANote)

module.exports = router