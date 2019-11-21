const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = Schema({
  title: String,
  description: String,
  issueType: String,
  assignedUsers: [String]
})

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;