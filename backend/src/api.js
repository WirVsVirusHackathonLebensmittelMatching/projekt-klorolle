const swagger = require('fastify-swagger');
const v1Routes = require('./routes/v1');
const v1Definitions = require('./routes/v1/schemas/definitions');

const { version } = require('../package.json');

module.exports = (fastify, opts, done) => {
  // Declare a routes
  fastify.get('/', async () => ({ hello: 'Welcome to Klopa!' }));

  // add swagger docs
  fastify.register(swagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Klopa backend',
        description: 'A REST backend for the Klopa web-app.',
        version,
      },
      schemes: [process.env.NODE_ENV === 'production' ? 'https' : 'http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
      definitions: v1Definitions,
    },
    exposeRoute: true,
  });

  fastify.ready((err) => {
    if (err) throw err;
    fastify.swagger();
  });

  // api version 1 routes
  fastify.register(v1Routes, { prefix: '/v1' });

  done();
};
