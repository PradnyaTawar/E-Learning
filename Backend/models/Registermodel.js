const mongoose = require('mongoose')

const registerTemplate = new mongoose.Schema({
    id: {
        type:String,
        required:true
    },
   
    Full_Name:{
        type: Date,
        default:Date.now   
    },
    Username:{
        type: Date,
        default:Date.now   
    },
    Contact:{
        type: Date,
        default:Date.now   
    },
    Password:{
        type: Date,
        default:Date.now   
    },
    Confirm_Password:{
        type: Date,
        default:Date.now   
    },
})

module.exports = mongoose.model('Registration', registerTemplate)