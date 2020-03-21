// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const v1Routes = require('./routes/v1');
const db = require('./db');
const swagger = require('./swagger');

// Declare a routes
fastify.get('/', async () => ({ hello: 'Welcome to Projekt-Klorolle!' }));

// add swagger docs
fastify.register(swagger);

// api version 1 routes
fastify.register(v1Routes, { prefix: '/v1' });

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
