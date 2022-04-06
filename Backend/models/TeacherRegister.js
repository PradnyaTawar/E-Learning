const mongoose = require('mongoose')

const TeacherTemplate = new mongoose.Schema({
    id: {
        type:String,
        required:true
    },
   
    fullname:{
        type:String,
        required:true  
    },
    username:{
        type:String,
        required:true   
    },
    contact:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Register', TeacherTemplate)