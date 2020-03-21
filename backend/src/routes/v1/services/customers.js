const schemas = require('../schemas/customers');

module.exports = (fastify, opts, done) => {
  fastify.put('/order', async () => null);

  fastify.addSchema(schemas.customer);

  done();
};

module.exports.autoPrefix = '/customers';
