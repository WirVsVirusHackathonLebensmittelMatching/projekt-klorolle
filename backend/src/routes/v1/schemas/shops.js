const findAll = {
  description: 'Returns a list of all shops.',
  tags: ['shops'],
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          // do not include _id field here so that it is removed from the response
          // _id: { type: 'string' },
          name: { type: 'string' },
          timestamp: { type: 'integer' },
          done: { type: 'boolean' },
        },
      },
    },
  },
};

const findByPostalCode = {
  description: 'Returns list of shops by postalcode',
  tags: ['shops'],
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          name: { type: 'string' },
          timestamp: { type: 'integer' },
          done: { type: 'boolean' },
        },
      },
    },
  },
  params: {
    type: 'object',
    properties: {
      postalCode: {
        type: 'string',
        description: 'Postalcode',
      },
    },
  },
};

const findOne = {
  description: 'Returns a shop by ID',
  tags: ['shops'],
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
  tags: ['shops'],
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
  },
};

const updateOne = {
  description: 'Update a shop by ID',
  tags: ['shops'],
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
  tags: ['shops'],
  params: {
    type: 'object',
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
};

module.exports = {
  findAll,
  findByPostalCode,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
