const order = {
  $id: 'order',
  type: 'object',
  required: ['id', 'customer', 'shop', 'dateStart'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    customer: { type: 'string', format: 'uuid' },
    shop: { type: 'string', format: 'uuid' },
    dateStart: { type: 'string', format: 'date-time' },
    duration: { type: 'integer' },
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
      items: 'order#',
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
    200: 'order#',
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

const findNextTimeslot = {
  description: 'Returns a pre-filled order object for next available timeslot of a shop.',
  summary: 'order findNextTimeslot',
  tags: ['orders'],
  response: {
    200: {
      type: 'object',
      properties: {
        // customer: { type: 'string', format: 'uuid' },
        shop: { type: 'string', format: 'uuid' },
        dateStart: { type: 'string', format: 'date-time' },
        duration: { type: 'integer' },
        status: { type: 'string' },
        comment: { type: 'string' },
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
    required: ['shop', 'date'],
    properties: {
      shop: { type: 'string', fomat: 'uuid' },
      date: { type: 'string', fomat: 'date', example: 'yyyy-mm-dd' },
    },
  },
};

const createOne = {
  description: 'Creates a order.',
  summary: 'order create',
  tags: ['orders'],
  body: {
    type: 'object',
    required: ['customer', 'dateStart'],
    properties: {
      customer: { type: 'string', format: 'uuid' },
      dateStart: { type: 'string', format: 'date-time' },
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
    200: 'order#',
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
      duration: { type: 'integer' },
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
  findNextTimeslot,
  createOne,
  updateOne,
  deleteOne,
};
