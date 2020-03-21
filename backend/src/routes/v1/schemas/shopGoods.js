const findAll = {
  description: 'Returns a list of all shops.',
  summary: 'shopGood list',
  tags: ['shopGoods'],
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

const createOne = {
  description: 'Creates a shopGood.',
  summary: 'shopGood create',
  tags: ['shopGoods'],
  body: {
    type: 'object',
    properties: {
      id: { type: 'string', format: 'uuid' },
      shop: { type: 'string', format: 'uuid' },
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
};

const updateOne = {
  description: 'Update a shop by ID',
  tags: ['shopGoods'],
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
  tags: ['shopGoods'],
  params: {
    type: 'object',
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
};

module.exports = {
  findAll,
  createOne,
  updateOne,
  deleteOne,
};
