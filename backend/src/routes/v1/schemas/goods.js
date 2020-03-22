const good = {
  $id: 'good',
  type: 'object',
  required: ['id', 'shop', 'name', 'status'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    shop: { type: 'string', format: 'uuid' },
    name: { type: 'string' },
    status: { type: 'string', enum: ['available', 'short', 'empty', 'unknown'] },
  },
};

const findAll = {
  description: 'Returns a list of all goods of a shop.',
  summary: 'good list',
  tags: ['goods'],
  response: {
    200: {
      type: 'array',
      items: {
        $ref: 'good#',
      },
    },
  },
  params: {
    type: 'object',
    required: ['shop'],
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
      $ref: 'good#',
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
    required: ['shop'],
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
};

const createOne = {
  description: 'Creates a good.',
  summary: 'good create',
  tags: ['goods'],
  body: {
    type: 'object',
    required: ['name', 'status'],
    properties: {
      name: { type: 'string' },
      status: { type: 'string' },
    },
  },
  params: {
    type: 'object',
    required: ['shop'],
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
  response: {
    200: {
      $ref: 'good#',
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
      name: { type: 'string' },
      status: { type: 'string' },
    },
  },
  params: {
    type: 'object',
    required: ['shop', 'good'],
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
      good: { type: 'string', fomat: 'uuid' },
    },
  },
};

const deleteOne = {
  description: 'Delete a good by ID',
  summary: 'good delete',
  tags: ['goods'],
  params: {
    type: 'object',
    required: ['shop', 'good'],
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
      good: { type: 'string', fomat: 'uuid' },
    },
  },
};

module.exports = {
  good,
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
