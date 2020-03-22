const order = {
  $id: 'order',
  type: 'object',
  required: ['id', 'customer', 'shop', 'dateStart'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    customer: { type: 'string', format: 'uuid' },
    shop: { type: 'string', format: 'uuid' },
    dateStart: { type: 'string', format: 'date' },
    type: { type: 'string', enum: ['shopYourself', 'clickAndCollect'] },
    status: { type: 'string', enum: ['', 'rejected'] },
    comment: { type: 'string' },
  },
};

const findAll = {
  description: 'Returns a list of all orders of a shop.',
  summary: 'order list',
  tags: ['orders'],
  response: {
    200: {
      type: 'array',
      items: {
        $ref: 'order#',
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
  description: 'Returns a order by ID',
  summary: 'order get',
  tags: ['orders'],
  response: {
    200: {
      $ref: 'order#',
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
  description: 'Creates a order.',
  summary: 'order create',
  tags: ['orders'],
  body: {
    type: 'object',
    required: ['customer', 'shop', 'dateStart'],
    properties: {
      customer: { type: 'string', format: 'uuid' },
      shop: { type: 'string', format: 'uuid' },
      dateStart: { type: 'string', format: 'date' },
      type: { type: 'string', enum: ['shopYourself', 'clickAndCollect'] },
      status: { type: 'string', enum: ['', 'rejected'] },
      comment: { type: 'string' },
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
      $ref: 'order#',
    },
  },
};

const updateOne = {
  description: 'Update a order by ID',
  summary: 'order update',
  tags: ['orders'],
  body: {
    type: 'object',
    properties: {
      type: { type: 'string', enum: ['shopYourself', 'clickAndCollect'] },
      comment: { type: 'string' },
      status: { type: 'string', enum: ['', 'rejected'] },
    },
  },
  params: {
    type: 'object',
    required: ['shop', 'order'],
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
      order: { type: 'string', fomat: 'uuid' },
    },
  },
};

const deleteOne = {
  description: 'Delete a order by ID',
  summary: 'order delete',
  tags: ['orders'],
  params: {
    type: 'object',
    required: ['shop', 'order'],
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
      order: { type: 'string', fomat: 'uuid' },
    },
  },
};

module.exports = {
  order,
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
