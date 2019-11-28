const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');

const index = async (req, res, next) => {
  try {
    const tickets = await Ticket.find();
    return tickets;
  }
  catch (err) {
    throw err;
  }
}

module.exports = {
  index
}