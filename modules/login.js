const mongoose = require ('mongoose')
const loginSchmea = new mongoose.Schema({
  name : {type: String , required: true }

})

module.exports = mongoose.model('loginSchema' , loginSchmea)