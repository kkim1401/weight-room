const { sh } = require('tasksfile');

function up() {
  return sh('prisma migrate up --experimental', {
    async: true,
    nopipe: true,
  });
}

function save() {
  return sh('prisma migrate save --experimental', {
    async: true,
    nopipe: true,
  });
}

function generate() {
  return sh('prisma generate --schema=src/prisma/schema.prisma', {
    async: true,
    nopipe: true,
  });
}

async function update() {
  await save();
  await up();
  await generate();
}

function studio() {
  return sh('prisma studio');
}

module.exports = {
  generate,
  save,
  studio,
  up,
  update,
};
