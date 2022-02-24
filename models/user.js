const mongoose = require('mongoose')

const {Schema, model} = mongoose


userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    hobbies:[String]

},{timestamps:true})

module.exports = mongoose.model('User', userSchema)
