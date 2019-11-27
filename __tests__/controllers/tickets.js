const { getTickets } = require('../../src/controllers/tickets.js');
const Ticket = require('../../src/models/Ticket');
const ticketMock = require('../../__mocks__/tickets');

jest.mock('../../src/models/Ticket', () => {
  return {
    find: jest.fn()
  }
});

Ticket.find.mockReturnValue(ticketMock);

describe('ticket controller', () => {

  describe('getTickets', () => {

    it('exists', () => {
      expect(getTickets).toBeDefined();
    })

    const result = getTickets();

    it('returns some data', () => {
      expect(result).toBeDefined();
    })

    it('returns an array of tickets', () => {
      Ticket.find = jest.fn().mockReturnThis();
      expect(result).toBeInstanceOf(Array);
    })
  })
})