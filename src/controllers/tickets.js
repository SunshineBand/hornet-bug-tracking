const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');

const getTickets = () => {
  return Ticket.find();
}

module.exports = {
  getTickets
}