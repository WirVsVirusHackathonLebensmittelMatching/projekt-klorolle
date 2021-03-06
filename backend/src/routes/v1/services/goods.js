const { v4: uuid } = require('uuid');
const db = require('../../../db');
const schemas = require('../schemas/goods');

module.exports = (fastify, opts, done) => {
  fastify.setNotFoundHandler((request, reply) => {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested item does not exist' });
  });

  fastify.addSchema(schemas.good);

  // find all goods
  fastify.get('/', { schema: schemas.findAll },
    async ({ params }) => {
      const shops = db.get('goods').filter({ shop: params.shop }).value() || [];
      return shops;
    });

  // find one good
  fastify.get('/:good', { schema: schemas.findOne },
    async ({ params }, reply) => {
      const good = db.get('goods').find({ id: params.good, shop: params.shop }).value();

      if (!good) {
        return reply.callNotFound();
      }

      return good;
    });

  // create good
  fastify.post('/', { schema: schemas.createOne },
    async ({ body, params }) => {
      const good = body;
      good.shop = params.shop; // set shop id
      good.id = uuid(); // generate uuid

      db.get('goods').push(good).write();
      return good;
    });

  // update good
  fastify.put('/:good', { schema: schemas.updateOne },
    async ({ body, params }, reply) => {
      let good = db.get('goods').find({ id: params.good, shop: params.shop }).value();

      if (!good) {
        return reply.callNotFound();
      }

      good = {
        ...good,
        ...body,
      };

      db.get('goods').find({ id: params.shop }).assign(good).write();

      return good;
    });

  // delete good
  fastify.delete('/:good', { schema: schemas.deleteOne },
    async ({ params }) => {
      db.get('goods').remove({ id: params.shop }).write();
    });

  done();
};

module.exports.autoPrefix = '/shops/:shop/goods';
