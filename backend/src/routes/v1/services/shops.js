const { v4: uuid } = require('uuid');
const db = require('../../../db');
const schemas = require('../schemas/shops');

module.exports = (fastify, opts, done) => {
  fastify.addHook('onRequest', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.setNotFoundHandler((request, reply) => {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested todo item does not exist' });
  });

  // find all
  fastify.get('/', { schema: schemas.findAll },
    async () => {
      const shops = db.get('shops').value();
      return { shops };
    });

  // find by postalcode
  fastify.get('/byPostalCode/:postalCode', { schema: schemas.findByPostalCode },
    async ({ params }) => {
      const shops = db.get('shops').find({ postalCode: params.postalCode }).value();
      return { shops };
    });

  // find one
  fastify.get('/:shop', { schema: schemas.findAll },
    async ({ params }) => {
      const shop = db.get('shops').find({ id: params.shop }).value();
      return { shop };
    });

  // create shop
  fastify.post('/:shop', { schema: schemas.createOne },
    async (params) => {
      const { shop } = params;

      shop.id = uuid(); // generate uuid

      db.get('shops').insert(shop).write();
      return { shop };
    });

  // update shop
  fastify.put('/:shop', { schema: schemas.deleteOne },
    async () => ({ shops: [] }));

  // delete shop
  fastify.delete('/:shop', { schema: schemas.deleteOne },
    async () => ({ shops: [] }));

  done();
};

module.exports.autoPrefix = '/shops';
