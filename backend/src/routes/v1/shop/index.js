module.exports = (fastify, opts, done) => {
  fastify.get('/shops', async () => ({ shops: [] }));

  done();
};
