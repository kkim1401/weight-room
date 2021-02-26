const { cli } = require('tasksfile');
const heroku = require('./heroku');
const prisma = require('./prisma');
const start = require('./start');

cli({
  heroku,
  prisma,
  start,
});
