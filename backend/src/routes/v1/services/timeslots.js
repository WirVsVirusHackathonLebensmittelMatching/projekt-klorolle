const { v4: uuid } = require('uuid');
const db = require('../../../db');
const schemas = require('../schemas/timeslots');

module.exports = (fastify, opts, done) => {
  done();
  return;

  // fastify.addHook('onRequest', async (request, reply) => {
  //   try {
  //     await request.jwtVerify();
  //   } catch (err) {
  //     reply.send(err);
  //   }
  // });

  fastify.addSchema(schemas.timeslot);

  fastify.setNotFoundHandler((request, reply) => {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested item does not exist' });
  });

  // find all timeslots
  fastify.get('/', { schema: schemas.findAll },
    async () => {
      const timeslots = db.get('timeslots').value() || [];
      return timeslots;
    });

  // find one timeslot
  fastify.get('/:timeslot', { schema: schemas.findOne },
    async ({ params }) => {
      const timeslot = db.get('timeslots').find({ timeslot: params.timeslot, shop: params.shop }).value();
      return timeslot;
    });

  // create timeslot
  fastify.post('/', { schema: schemas.createOne },
    async ({ body, params }) => {
      const timeslot = body;
      timeslot.id = uuid(); // generate uuid
      timeslot.shop = params.shop;

      db.get('timeslots').push(timeslot).write();
      return timeslot;
    });

  // update timeslot
  fastify.put('/:timeslot', { schema: schemas.updateOne },
    async ({ body, params }, reply) => {
      let timeslot = db.get('timeslots').find({ id: params.timeslot, shop: params.shop });

      if (!timeslot) {
        return reply.callNotFound();
      }

      timeslot = {
        ...timeslot,
        ...body,
      };

      db.get('timeslots').find({ id: params.shop });

      return timeslot;
    });

  // delete timeslot
  fastify.delete('/:timeslot', { schema: schemas.deleteOne },
    async () => (null));

  done();
};

module.exports.autoPrefix = '/shops/:shop/timeslots';
