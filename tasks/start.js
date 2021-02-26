const { sh } = require('tasksfile');
const { push } = require('./prisma');

function dev() {
  return sh('nodemon -r dotenv/config -r esm src/index.js', { nopipe: true });
}

async function start() {
  await push();
  await sh('node -r esm src/index.js', { nopipe: true });
}

module.exports = {
  default: start,
  dev,
};
