const swagger = require('fastify-swagger');

const { version } = require('../package.json');

module.exports = (fastify, opts, done) => {
  fastify.register(swagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Klopa backend',
        description: 'A REST backend for the Klopa web-app.',
        version,
      },
      definitions: {
        Shop: {
          type: 'object',
          required: ['id', 'name'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            name: { type: 'string' },
            postalcode: { type: 'number' },
          },
        },

        ShopOwner: {
          required: ['id', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            name: { type: 'string', nullable: true },
            email: { type: 'string', format: 'email' },
          },
        },

        TimeSlot: {
          type: 'object',
          required: ['id', 'start', 'end'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            shop: { type: 'string', format: 'uuid' },
            start: { type: 'date' },
            end: { type: 'date' },
            amount: { type: 'number' },
            type: { type: 'string', enum: ['shopYourself', 'clickAndCollect'] },
          },
        },

        Customer: {
          type: 'object',
          required: ['id', 'name', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
          },
        },

        Order: {
          type: 'object',
          required: ['id', 'shop', 'timeSlot'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            timeSlot: { type: 'string', format: 'uuid' },
            customer: { type: 'string', format: 'uuid' },
          },
        },
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
    },
    exposeRoute: true,
  });

  fastify.ready((err) => {
    if (err) throw err;
    fastify.swagger();
  });

  done();
};
