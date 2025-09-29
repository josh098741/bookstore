const express = require('express')

const app = express()

const notesRoutes = require('./routes/notesRoutes')

app.use("/api/notes",notesRoutes)

app.listen(5001,() => {
    console.log('app listtening on port 5001')
})