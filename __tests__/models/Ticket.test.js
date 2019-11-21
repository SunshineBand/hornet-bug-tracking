const Ticket = require('../../src/models/Ticket');

describe('Ticket Model', () => {
  const ticket = new Ticket({
    title: "New Things",
    description: "Must create a new application based thing",
    issueType: "Feature",
    assignedUsers: ["User 1"]
  })

  it('exists', () => {
    expect(ticket).toBeDefined();
  })

  it('is a mongoose model', () => {
    expect(ticket.constructor.name).toBe('model');
  })

  it('has title', () => expect(ticket.title).toBe("New Things"));
  it('has description', () => expect(ticket.description).toBe("Must create a new application based thing"));
  it('has issueType', () => expect(ticket.issueType).toBe("Feature"));
  it('has assignedUsers', () => {
    expect(ticket.assignedUsers[0]).toBe("User 1")
  });
})