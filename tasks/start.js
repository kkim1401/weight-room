const { sh } = require('tasksfile');
const prisma = require('./prisma');

function dev() {
  return sh('nodemon -r dotenv/config -r esm src/index.js', { nopipe: true });
}

async function start() {
  await prisma.deploy();
  // Normally don't need to do this but Heroku isn't generating the client during postinstall.
  await prisma.generate();
  await sh('node -r esm src/index.js', { nopipe: true });
}

module.exports = {
  default: start,
  dev,
};
