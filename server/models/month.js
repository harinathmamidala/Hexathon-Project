const mongoose = require('mongoose')

const MonthSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: [true, 'must provide firstname'],
  },
  month:{
    type: String,
    required: [true, 'must provide lastname'],
  },
  powerConsumed: {
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
    timeTaken:{
      type: Number,
      required:true
    }
  }]
})

module.exports = mongoose.model('Month', MonthSchema)