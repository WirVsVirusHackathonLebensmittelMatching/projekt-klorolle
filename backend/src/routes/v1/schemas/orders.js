const order = {
  $id: 'order',
  type: 'object',
  required: ['id', 'shop', 'timeSlot'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    timeSlot: { type: 'string', format: 'uuid' },
    customer: { type: 'string', format: 'uuid' },
    type: { type: 'string', enum: ['shopYourself', 'clickAndCollect'] },
  },
};

module.exports = { order };
