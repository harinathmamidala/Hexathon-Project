const mongoose = require('mongoose')

const YearSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: [true, 'must provide firstname'],
  },
  power: {
    type: Number,
    required:[true,'must provide country']
  },
  devices: [{
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    power:{
      type: Number,
      required:true
    }
  }]
})

module.exports = mongoose.model('Year', YearSchema)