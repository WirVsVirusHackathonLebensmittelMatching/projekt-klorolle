const { v4: uuid } = require('uuid');
const moment = require('moment');
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
  fastify.get('/byCustomer/:customer', { schema: schemas.findByCustomer },
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

  // find next free timeslot and prepare order
  fastify.get('/nextTimeslot/:date', { schema: schemas.findNextTimeslot },
    async ({ params }, reply) => {
      const shop = db.get('shops').find({ id: params.shop }).value();
      if (!shop) {
        return reply
          .code(409)
          .type('application/json')
          .send({ message: 'Shop not found' });
      }

      // get slot start from minutes
      function getSlotStart(minutes) {
        return minutes - (minutes % shop.timeslots.slotDuration);
      }

      function minutesSinceMidnight(date) {
        const mmtMidnight = date.clone().startOf('day');

        // Difference in minutes
        return date.diff(mmtMidnight, 'minutes');
      }

      function getOrdersOfSlot(minutes) {
        const orders = db.get('orders')
          .filter({ shop: params.shop })
          .filter((o) => {
            const i = getSlotStart(minutesSinceMidnight(moment(o)));
            const j = getSlotStart(minutes);
            return i === j;
          })
          .value();

        return orders.length || -1;
      }

      const requestedDate = moment(params.date, 'YYYY/MM/DD');

      // is requested date in the past
      if (requestedDate.diff(moment(), 'days') < 0) {
        return reply
          .code(409)
          .type('application/json')
          .send({ message: 'You can not request slots for past dates' });
      }

      if (!shop.timeslots || !shop.timeslots.from) {
        return reply
          .code(409)
          .type('application/json')
          .send({ message: 'Please contact the shop owner!' });
      }

      let from = moment(shop.timeslots.from, 'HH:mm');

      // if requested day is today
      if (requestedDate.isSame(moment(), 'day')) {
        from = moment.max(from, moment());
      }

      from = minutesSinceMidnight(from);
      from = getSlotStart(from);
      const to = minutesSinceMidnight(moment(shop.timeslots.to, 'HH:mm'));

      let dateStart;
      for (let i = from; i <= to; i += shop.timeslots.slotDuration) {
        // if in future and after opening and if timeslots left
        if (i > from && getOrdersOfSlot(i) < shop.timeslots.parallelSlots) {
          requestedDate.set({
            minute: i % 60,
            hour: Math.floor(i / 60),
          });
          dateStart = requestedDate.utcOffset(0).toISOString();
          break;
        }
      }

      // no free timeslot for date found
      if (!dateStart) {
        return reply
          .code(409)
          .type('application/json')
          .send({ message: 'No free timeslot' });
      }

      const order = {
        // customer: '', // pre-set customer id
        dateStart,
        duration: shop.timeslots.slotDuration,
        status: '',
        comment: '',
      };

      return order;
    });

  // create order
  fastify.post('/', { schema: schemas.createOne },
    async ({ body, params }, reply) => {
      const shop = db.get('shops').find({ id: params.shop }).value();

      if (!shop) {
        return reply
          .code(404)
          .type('application/json')
          .send({ message: 'Shop does not exist' });
      }

      if (!shop.timeslots || !shop.timeslots.slotDuration) {
        return reply
          .code(409)
          .type('application/json')
          .send({ message: 'Please contact the shop owner!' });
      }

      const order = body;
      order.id = uuid(); // generate uuid
      order.shop = params.shop; // set shop id
      // order.customer = ''; // set customer id // TODO: force customer id
      order.duration = shop.timeslots.slotDuration;

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
