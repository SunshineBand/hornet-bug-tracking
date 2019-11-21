const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  issueType: {
    type: String,
    required: true,
  },
  assignedUsers: [String]
})

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;