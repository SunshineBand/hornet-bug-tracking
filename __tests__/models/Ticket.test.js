const Ticket = require('../../src/models/Ticket');

describe('Ticket Model', () => {
  it('exists', () => {
    const ticket = new Ticket({
      title: "New things",
      description: "Must create a new application based thing",
      issueType: "Feature",
      assignedUsers: []
    })
    expect(ticket).toBeDefined();
  })
})