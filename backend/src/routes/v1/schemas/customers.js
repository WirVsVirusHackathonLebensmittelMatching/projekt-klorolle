const customer = {
  $id: 'customer',
  type: 'object',
  required: ['id', 'name', 'email'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', format: 'password' },
    postalcode: { type: 'integer' },
  },
};

const findOne = {
  description: 'Get a customer by ID',
  tags: ['customers'],
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
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
  description: 'Creates a customer.',
  tags: ['customers'],
  summarize: 'Creates customer',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
    },
  },
};

const updateOne = {
  description: 'Update a customer by ID',
  tags: ['customers'],
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
  description: 'Delete a customer by ID',
  tags: ['customers'],
  params: {
    type: 'object',
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
};

module.exports = {
  customer,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
