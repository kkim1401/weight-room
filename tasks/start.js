const { sh } = require('tasksfile');
const { generate } = require('./prisma');

function dev() {
  return sh('nodemon -r dotenv/config -r esm src/index.js', { nopipe: true });
}

async function start() {
  await generate();
  await sh('node -r esm src/index.js', { nopipe: true });
}

module.exports = {
  default: start,
  dev,
};
