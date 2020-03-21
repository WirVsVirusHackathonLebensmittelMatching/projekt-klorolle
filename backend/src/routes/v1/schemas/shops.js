const findAll = {
  description: 'Returns a list of all shops.',
  summary: 'shop list',
  tags: ['shops'],
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

const findByPostalCode = {
  description: 'Returns list of shops by postalcode',
  summary: 'shop list by postalcode',
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
  summary: 'shop get',
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
  summary: 'shop create',
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
  summary: 'shop update',
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
  summary: 'shop delete',
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
