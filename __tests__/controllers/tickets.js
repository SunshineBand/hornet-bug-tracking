const {
  index,
  create
} = require('../../src/controllers/tickets.js');

const Ticket = require('../../src/models/Ticket');
const ticketMockDatabase = require('../../__mocks__/tickets');

jest.mock('../../src/models/Ticket', () => {
  return {
    find: jest.fn(),
    save: jest.fn()
  }
});

Ticket.find.mockReturnValue(ticketMockDatabase);

describe('ticket controller', () => {

  describe('index', () => {

    it('exists', () => {
      expect(index).toBeDefined();
    })

    it('returns a promise', async () => {
      const result = index();
      expect(result).toBeInstanceOf(Promise);
    })

    it('contains some array data', async done => {
      expect.assertions(2);
      const result = await index();
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Array);
      done();
    })

    it('throws an error when needed', async () => {
      expect.assertions(1);

      jest.mock('../../src/models/Ticket', () => {
        return {
          find: jest.fn()
        }
      });
      Ticket.find.mockImplementation(() => {
        throw new Error('Some error');
      })

      try {
        const errorResult = await index();
        expect(errorResult).toBeUndefined();
      }
      catch (err) {
        expect(err).toBeDefined();
      }
    })
  })

  describe('create', () => {

    const req = {
      mock: 'request'
    }
    
    it('requires a request object', async () => {
      expect.assertions(1);
      try {
        const result = await create();
        expect(result).toBeUndefined();
      }
      catch (e) {
        expect(e).toBeDefined();
      }
    })

    it('requires a title and issueType in request', async done => {
      expect.assertions(1);
      const req = {
        mock: 'request'
      }

      try {
        const result = await create(req);
      }
      catch (e) {
        expect(e).toBeDefined();
        done();
      }
    })

    it('creates a new ticket and saves to database', async () => {
      const req = {
        title: "New Ticket",
        issueType: 'Feature'
      }

      try {
        const result = await create(req);
        expect(Ticket.save).toHaveBeenCalled();
      }
      catch (e) {
        expect(e).toBeUndefined();
      }
    })
  })
})