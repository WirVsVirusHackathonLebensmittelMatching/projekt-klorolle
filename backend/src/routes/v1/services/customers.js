module.exports = (fastify, opts, done) => {
  fastify.put('/order', async () => null);

  done();
};

module.exports.autoPrefix = '/customers';
