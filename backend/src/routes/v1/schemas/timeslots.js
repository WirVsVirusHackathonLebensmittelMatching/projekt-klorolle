const findAll = {
  description: 'Returns a list of all shops.',
  summary: 'timeslots list',
  tags: ['timeslots'],
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
        },
      },
    },
  },
};

const findOne = {
  description: 'Returns a shop by ID',
  summary: 'timeslot get',
  tags: ['timeslots'],
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        timestamp: { type: 'integer' },
        done: { type: 'boolean' },
      },
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
  params: {
    type: 'object',
    properties: {
      shop: {
        type: 'string',
        fomat: 'uuid',
        description: 'shop id',
      },
    },
  },
};

const createOne = {
  description: 'Creates a shop.',
  summary: 'timeslot create',
  tags: ['timeslots'],
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
  },
};

const updateOne = {
  description: 'Update a shop by ID',
  summary: 'timeslot update',
  tags: ['timeslots'],
  body: {
    type: 'object',
    properties: {
      done: { type: 'boolean' },
    },
  },
  params: {
    type: 'object',
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
};

const deleteOne = {
  description: 'Delete a shop by ID',
  summary: 'timeslot delete',
  tags: ['timeslots'],
  params: {
    type: 'object',
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
};

module.exports = {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
