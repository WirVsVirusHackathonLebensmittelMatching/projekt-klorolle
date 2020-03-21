const swagger = require('fastify-swagger');

const { version } = require('../package.json');

module.exports = (fastify, opts, done) => {
  fastify.register(swagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Projekt-Klorolle backend',
        description: 'A REST backend for the projekt-klorolle web app.',
        version,
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
