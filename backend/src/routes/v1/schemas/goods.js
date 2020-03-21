const findAll = {
  description: 'Returns a list of all goods of a shop.',
  summary: 'good list',
  tags: ['goods'],
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          id: { type: 'string', format: 'uuid' },
          shop: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          status: { type: 'string' },
        },
      },
    },
  },
  params: {
    type: 'object',
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
};

const findOne = {
  description: 'Returns a good by ID',
  summary: 'good get',
  tags: ['goods'],
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        shop: { type: 'string', format: 'uuid' },
        name: { type: 'string' },
        status: { type: 'string' },
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
  description: 'Creates a good.',
  summary: 'good create',
  tags: ['goods'],
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      status: { type: 'string' },
    },
  },
  params: {
    type: 'object',
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        shop: { type: 'string', format: 'uuid' },
        name: { type: 'string' },
        status: { type: 'string' },
      },
    },
  },
};

const updateOne = {
  description: 'Update a shop by ID',
  summary: 'good update',
  tags: ['goods'],
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
  description: 'Delete a good by ID',
  summary: 'good delete',
  tags: ['goods'],
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
