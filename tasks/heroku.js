const prisma = require('./prisma');

async function postBuild() {
  await prisma.deploy();
  await prisma.generate();
}

module.exports = {
  postBuild,
};
