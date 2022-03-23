const mongoose = require('mongoose'); //chama o mongoose p usar ele na collection

const taskSchema = mongoose.Schema({
  name: {type: String, required: true}, //field name obrigatorio
  done: {type: Boolean, default: false},
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true
  }
})

module.exports = mongoose.model('Task', taskSchema)