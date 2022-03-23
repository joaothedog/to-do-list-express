const mongoose = require('mongoose'); //chama o mongoose p usar ele na collection

const checklistSchema = mongoose.Schema({
  name: { type: String, required: true }, //field name obrigatorio
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

module.exports = mongoose.model('Checklist', checklistSchema)