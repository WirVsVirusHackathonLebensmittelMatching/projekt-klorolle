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
      const orders = db.get('orders').filter({ shop: params.shop }).value() || [];
      return orders;
    });

  // find all orders by customer
  fastify.get('/byCustomer/:customer', { schema: schemas.findAll },
    async ({ params }) => {
      const orders = db.get('orders').filter({ shop: params.shop, customer: params.customer }).value() || [];
      return orders;
    });

  // find one order
  fastify.get('/:order', { schema: schemas.findOne },
    async ({ params }, reply) => {
      const order = db.get('orders').find({ id: params.order, shop: params.shop }).value();

      if (!order) {
        return reply.callNotFound();
      }

      return order;
    });

  // create order
  fastify.post('/', { schema: schemas.createOne },
    async ({ body, params }, reply) => {
      const shop = db.get('shops').find({ shop: params.shop }).value();

      if (!shop) {
        return reply.callNotFound();
      }

      const order = body;
      order.id = uuid(); // generate uuid
      order.shop = params.shop; // set shop id
      // order.customer = ''; // set customer id // TODO: force customer id
      order.duration = shop.duration;

      db.get('orders').push(order).write();
      return order;
    });

  // update order
  fastify.put('/:order', { schema: schemas.updateOne },
    async ({ body, params }, reply) => {
      let order = db.get('orders').find({ id: params.order, shop: params.shop }).value();

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
