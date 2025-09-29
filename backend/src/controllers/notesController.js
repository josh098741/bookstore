

const getAllNotes = (req,res) => {
    res.status(200).send('You just fetched the notes')
}

const createANote = (req,res) => {
    res.status(201).json({message: "Created a post successfully"})
}

const updateANote = (req,res) => {
    res.status(200).json({message: "Note updated successfully"})
}

const deleteANote = (req,res) => {
    res.status(200).json({messaage: "Note deleted successfully"})
}

module.exports = {
    getAllNotes,
    createANote,
    updateANote,
    deleteANote
}