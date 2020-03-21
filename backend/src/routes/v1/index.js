const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = (fastify, opts, done) => {
  fastify.get('/', async () => ({ hello: 'Welcome to Projekt-Klorolle! (api version 1)' }));

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
  });

  done();
};
