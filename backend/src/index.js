// Require the framework and instantiate it
require('dotenv').config();
const path = require('path');
const fastify = require('fastify')({ logger: true });

require('./db');
const apiRoutes = require('./api');

const PORT = process.env.PORT || 3000;

const ENV = process.env.NODE_ENV || 'production';

const publicPath = ENV === 'production'
  ? path.join(__dirname, '..', 'public')
  : path.join(__dirname, '..', '..', 'frontend');


fastify
  // serve static frontend code
  .register(require('fastify-static'), {
    root: publicPath,
    index: ['index.html'],
  })
  .register(require('fastify-cors'))
  .register(require('fastify-helmet'))
  .register(require('fastify-jwt'), {
    secret: process.env.SECRET || 'youshouldspecifyalongsecret',
  });

// add api routes
fastify.register(apiRoutes, { prefix: '/api' });

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

process.on('SIGINT', () => { console.log('Bye bye!'); process.exit(); });

start();
