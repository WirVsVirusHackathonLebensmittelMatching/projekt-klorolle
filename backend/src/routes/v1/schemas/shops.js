const shop = {
  $id: 'shop',
  type: 'object',
  required: ['id', 'name', 'postalCode'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string' },
    postalCode: { type: 'integer', example: 51432 },
    timeslots: {
      type: 'object',
      properties: {
        from: { type: 'integer', description: 'Staring time of work day', example: '08:00' },
        to: { type: 'integer', description: 'End time of work day', example: '19:00' },
        slotDuration: { type: 'integer', description: 'Time per slot in minutes', example: 20 },
        parallelSlots: { type: 'integer', description: 'Amount of concurrently available slots', example: 5 },
      },
    },
  },
};

const findAll = {
  description: 'Returns a list of all shops.',
  summary: 'shop list',
  tags: ['shops'],
  response: {
    200: {
      type: 'array',
      items: {
        $ref: 'shop#',
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
        $ref: 'shop#',
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
      $ref: 'shop#',
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
      shop: { type: 'string', fomat: 'uuid' },
    },
  },
};

const createOne = {
  description: 'Creates a shop.',
  summary: 'shop create',
  tags: ['shops'],
  body: {
    type: 'object',
    required: ['name', 'postalCode'],
    properties: {
      name: { type: 'string' },
      postalCode: { type: 'integer' },
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
      name: { type: 'string' },
      postalCode: { type: 'integer' },
      timeslots: {
        type: 'object',
        properties: {
          from: { type: 'integer', description: 'Staring time of work day', example: '08:00' },
          to: { type: 'integer', description: 'End time of work day', example: '19:00' },
          slotDuration: { type: 'integer', description: 'Time per slot in minutes', example: 20 },
          parallelSlots: { type: 'integer', description: 'Amount of concurrently available slots', example: 5 },
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
  shop,
  findAll,
  findByPostalCode,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
