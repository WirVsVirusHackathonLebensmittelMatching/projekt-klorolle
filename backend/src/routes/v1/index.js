const shopRoutes = require('./shop');
const customerRoutes = require('./customer');

module.exports = (fastify, opts, done) => {
  fastify.get('/', async () => ({ hello: 'Welcome to Projekt-Klorolle! (api version 1)' }));

  // shop routes
  fastify.register(shopRoutes, { prefix: '/shop' });

  // customer routes
  fastify.register(customerRoutes, { prefix: '/customer' });

  done();
};
