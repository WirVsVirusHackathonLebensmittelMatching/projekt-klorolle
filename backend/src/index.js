// Require the framework and instantiate it
require('dotenv').load();
const path = require('path');
const fastify = require('fastify')({ logger: true });
const db = require('./db');
const apiRoutes = require('./api');
const PORT = process.env.PORT || 3000;

const ENV = process.env.NODE_ENV || 'production';

// add swagger docs
fastify.register(apiRoutes, { prefix: '/api' });

const publicPath = ENV === 'production'
  ? path.join(__dirname, '..', 'public')
  : path.join(__dirname, '..', '..', 'frontend');

// serve static frontend code
fastify.register(require('fastify-static'), {
  root: publicPath,
  index: ['index.html'],
});

// send index instead of error
// fastify.setNotFoundHandler((request, reply) => {
//   reply.sendFile('index.html');
// });

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0');
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
