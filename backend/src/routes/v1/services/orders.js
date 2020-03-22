const { v4: uuid } = require('uuid');
const db = require('../../../db');
const schemas = require('../schemas/orders');

module.exports = (fastify, opts, done) => {
  fastify.setNotFoundHandler((request, reply) => {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested item does not exist' });
  });

  fastify.addSchema(schemas.order);

  // find all orders
  fastify.get('/', { schema: schemas.findAll },
    async ({ params }) => {
      const shops = db.get('orders').filter({ shop: params.shop }).value() || [];
      return shops;
    });

  // find one order
  fastify.get('/:order', { schema: schemas.findOne },
    async ({ params }, reply) => {
      const order = db.get('orders').filter({ id: params.order, shop: params.shop }).value();

      if (!order) {
        return reply.callNotFound();
      }

      return order;
    });

  // create order
  fastify.post('/', { schema: schemas.createOne },
    async ({ body, params }) => {
      const order = body;
      order.shop = params.shop; // set shop id
      order.id = uuid(); // generate uuid

      db.get('orders').push(order).write();
      return order;
    });

  // update order
  fastify.put('/:order', { schema: schemas.updateOne },
    async ({ body, params }, reply) => {
      let order = db.get('orders').filter({ id: params.order, shop: params.shop }).value();

      if (!order) {
        return reply.callNotFound();
      }

      order = {
        ...order,
        ...body,
      };

      db.get('orders').find({ id: params.shop }).assign(order).write();

      return order;
    });

  // delete order
  fastify.delete('/:order', { schema: schemas.deleteOne },
    async ({ params }) => {
      db.get('orders').remove({ id: params.shop }).write();
    });

  done();
};

module.exports.autoPrefix = '/shops/:shop/orders';
