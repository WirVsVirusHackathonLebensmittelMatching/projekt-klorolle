const { v4: uuid } = require('uuid');
const db = require('../../../db');
const schemas = require('../schemas/customers');

module.exports = (fastify, opts, done) => {
  if (!process.env.INSECURE) {
    fastify.addHook('onRequest', async (request, reply) => {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    });
  }

  fastify.addSchema(schemas.customer);

  fastify.setNotFoundHandler((request, reply) => {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested item does not exist' });
  });

  // find all customers
  if (process.env.INSECURE) {
    fastify.get('/', { schema: schemas.findAll },
      async () => {
        const customers = db.get('customers').value() || [];
        return customers;
      });
  }

  // find one customer
  fastify.get('/:customer', { schema: schemas.findOne },
    async ({ params }, reply) => {
      const customer = db.get('customers').find({ id: params.customer }).value();

      if (!customer) {
        return reply.callNotFound();
      }

      return customer;
    });

  // create customer
  fastify.post('/', { schema: schemas.createOne },
    async ({ body }) => {
      const customer = body;
      customer.id = uuid(); // generate uuid

      // TODO: check if email already exists

      db.get('customers').push(customer).write();
      return customer;
    });

  // update customer
  fastify.put('/:customer', { schema: schemas.updateOne },
    async ({ params, body }, reply) => {
      let customer = db.get('customers').find({ id: params.customer }).value();

      if (!customer) {
        return reply.callNotFound();
      }

      customer = {
        ...customer,
        ...body,
      };

      db.get('customers').find({ id: params.customer }).assign(customer).write();

      return customer;
    });

  // delete customer
  fastify.delete('/:customer', { schema: schemas.deleteOne },
    async ({ params }) => {
      db.get('customers').remove({ id: params.customer }).write();
    });

  done();
};

module.exports.autoPrefix = '/customers';
