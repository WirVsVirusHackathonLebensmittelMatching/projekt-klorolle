const path = require('path');
const AutoLoad = require('fastify-autoload');
const git = require('git-last-commit');
const db = require('../../db');
const { version } = require('../../../package.json');

module.exports = (fastify, opts, done) => {
  fastify.get('/', {
    schema: {
      summary: 'api info',
    },
  }, () => new Promise((resolve, reject) => {
    git.getLastCommit((err, commit) => {
      if (err) {
        return reject(err);
      }

      return resolve({
        hello: 'Welcome to Projekt-Klorolle! (api version 1)',
        version,
        git: {
          hash: commit.hash,
          branch: commit.branch,
          message: commit.subject,
          author: commit.author.name,
          date: new Date(commit.committedOn * 1000),
        },
      });
    });
  }));

  // TODO: remove for security reasons
  // if (process.env.NODE_ENV === 'development') {
  fastify.get('/resetDatabase', {
    schema: {
      summary: 'database reset',
    },
  }, async () => {
    // reset database
    db.seedDatabase();
    return { message: 'Database resseted!' };
  });
  // }

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
  });

  done();
};
