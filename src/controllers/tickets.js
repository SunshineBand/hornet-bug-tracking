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

const create = async (req, res, next) => {
  if(!req) {
    throw new Error('Expected a request object');
  }

  const { title, issueType, description } = req;

  if(!title || !issueType) {
    throw new Error('Expected a title and an issueType');
  }

  const ticket = new Ticket({
    title: title,
    issueType: issueType,
    description: description
  })

  try {
    const newTicket = await ticket.save();
  }
  catch (e) {
    throw e
  }
}

module.exports = {
  index,
  create
}