const { v4: uuid } = require('uuid');
const db = require('../../../db');
const schemas = require('../schemas/shops');

module.exports = (fastify, opts, done) => {
  // fastify.addHook('onRequest', async (request, reply) => {
  //   try {
  //     await request.jwtVerify();
  //   } catch (err) {
  //     reply.send(err);
  //   }
  // });

  fastify.addSchema(schemas.shop);

  fastify.setNotFoundHandler((request, reply) => {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested item does not exist' });
  });

  // find all shops
  fastify.get('/', { schema: schemas.findAll },
    async () => {
      const shops = db.get('shops').value() || [];
      return shops;
    });

  // find by shops by postalcode
  fastify.get('/byPostalCode/:postalCode', { schema: schemas.findByPostalCode },
    async ({ params }) => {
      const shops = db.get('shops').find({ postalCode: params.postalCode }).value() || [];
      return shops;
    });

  // find one shop
  fastify.get('/:shop', { schema: schemas.findOne },
    async ({ params }, reply) => {
      const shop = db.get('shops').find({ id: params.shop }).value();

      if (!shop) {
        return reply.callNotFound();
      }

      return shop;
    });

  // create shop
  fastify.post('/', { schema: schemas.createOne },
    async ({ body }) => {
      const shop = body;
      shop.id = uuid(); // generate uuid

      db.get('shops').push(shop).write();
      return shop;
    });

  // update shop
  fastify.put('/:shop', { schema: schemas.updateOne },
    async ({ params, body }, reply) => {
      let shop = db.get('shops').find({ id: params.shop }).value();

      if (!shop) {
        return reply.callNotFound();
      }

      shop = {
        ...shop,
        ...body,
      };

      db.get('shops').find({ id: params.shop }).assign(shop).write();

      return shop;
    });

  // delete shop
  fastify.delete('/:shop', { schema: schemas.deleteOne },
    async ({ params }) => {
      db.get('shops').remove({ id: params.shop }).write();
    });

  done();
};

module.exports.autoPrefix = '/shops';
