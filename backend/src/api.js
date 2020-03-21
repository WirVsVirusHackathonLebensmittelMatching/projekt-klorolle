const v1Routes = require('./routes/v1');
const swagger = require('./swagger');

module.exports = (fastify, opts, done) => {
  // Declare a routes
  fastify.get('/', async () => ({ hello: 'Welcome to Projekt-Klorolle!' }));

  // add swagger docs
  fastify.register(swagger);

  // api version 1 routes
  fastify.register(v1Routes, { prefix: '/v1' });

  done();
};
