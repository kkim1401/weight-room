const { sh } = require('tasksfile');
const schema = 'src/prisma/schema.prisma';

function deploy() {
  return sh(`prisma migrate deploy --preview-feature --schema=${schema}`, {
    async: true,
    nopipe: true,
  });
}

function dev() {
  return sh(`prisma migrate dev --preview-feature --schema=${schema}`, {
    async: true,
    nopipe: true,
  });
}

function generate() {
  return sh(`prisma generate --schema=${schema}`, {
    async: true,
    nopipe: true,
  });
}

function push() {
  return sh(`prisma db push --preview-feature --schema=${schema}`, {
    async: true,
    nopipe: true,
  });
}

function studio() {
  return sh('prisma studio');
}

module.exports = {
  deploy,
  dev,
  generate,
  push,
  studio,
};
