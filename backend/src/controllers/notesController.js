const Note = require("../models/Note")

const getAllNotes = async (req,res) => {
    try{
        const notes = await Note.find().sort({createdAt:-1})//sort by last created
        if(notes < 1){
            return res.status(404).json({message: "There were no notes to be found"})
        }
        res.status(200).json(notes)
    }catch(error){
        console.error("Error in get all notes controller",error.message)
        res.status(500).json({message: "Internal server error"})
    }
}

const getANote = async (req,res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message: "Note was not found"})
        }
        res.status(200).json(note)
    }catch(error){
        res.status(500).json({message: "Internal server error"});
        console.error("Error occured in fetching note", error.message)
    }
}

const createANote = async (req,res) => {
    try{
        const {title, content} = req.body;
        const note = new Note({title, content});

        const savedNote = await note.save();

        res.status(201).json(savedNote)
    }catch(error){
        console.error("Error in create notes controller",error.message)
        res.status(500).json({message: "Internal server error"})
    }
}

const updateANote = async (req,res) => {
    try{
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true, runValidators: true})
        if(!updatedNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json(updatedNote)  
    }catch(error){
        console.error("Error occured in update a note",error.message)
        res.status(500).json({message: "Internal sever error occured"})
    }
}

const deleteANote = async (req,res) => {
    try{
        const note = await Note.findByIdAndDelete(req.params.id)
        if(!note){
            res.status(404).json({message: "Note cannot be found"})
        }
        res.status(200).json({message: "Note deleted successfully"})
    }catch(error){
        res.status(500).json({message: "INternal server error"});
        console.log("An error occured in deleting task", error.message)
    }
}

module.exports = {
    getAllNotes,
    getANote,
    createANote,
    updateANote,
    deleteANote
}