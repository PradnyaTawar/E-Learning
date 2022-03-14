const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    note: {
        type:String,
        required:true
    },
   
    date:{
        type: Date,
        default:Date.now   
    }

})

module.exports = mongoose.model('notes', signUpTemplate)