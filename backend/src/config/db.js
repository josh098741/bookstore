const mongoose = require('mongoose')


const connectDB = async (url) => {
    try{
        await mongoose.connect(url)
        console.log('Connected to database successfully')
    }catch(error){
        console.error('Failed to connect to the database',error.message);
        process.exit(1)
    }
}


module.exports = connectDB