const { cli } = require('tasksfile');
const prisma = require('./prisma');
const start = require('./start');

cli({
  prisma,
  start,
});
