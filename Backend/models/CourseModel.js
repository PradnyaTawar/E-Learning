const mongoose = require('mongoose')

const courseTemplate = new mongoose.Schema({
    id: {
        type:String,
        required:true
    },
   
    coursename:{
        type:String,
        required:true  
    },
    links:{
        type:String,
        required:true   
    },
    skills:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
  
})

module.exports = mongoose.model('Course', courseTemplate)