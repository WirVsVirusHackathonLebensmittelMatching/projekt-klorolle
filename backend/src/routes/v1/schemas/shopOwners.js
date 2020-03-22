const shopOwner = {
  $id: 'shopowner',
  required: ['id', 'email'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string', nullable: true },
    email: { type: 'string', format: 'email' },
  },
};

module.exports = { shopOwner };
