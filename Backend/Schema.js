const mongoose = require('mongoose')

const AssessmentSchema = new mongoose.Schema({
    name:String,
    address:String,
    description: String,
    symptoms:String,
    bloodtype:String



    
})

module.exports = mongoose.model('Assessment', AssessmentSchema)
