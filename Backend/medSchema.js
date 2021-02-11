const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
    rxcode:String,
    dosage:String
    
 



    
})

module.exports = mongoose.model('MedicineInfo', MedicineSchema)
