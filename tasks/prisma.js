const { sh } = require('tasksfile');

function deploy() {
  return sh(
    'prisma migrate deploy --preview-feature --schema=src/prisma/schema.prisma',
    {
      async: true,
      nopipe: true,
    }
  );
}

function dev() {
  return sh(
    'prisma migrate dev --preview-feature --schema=src/prisma/schema.prisma',
    {
      async: true,
      nopipe: true,
    }
  );
}

function generate() {
  return sh('prisma generate --schema=src/prisma/schema.prisma', {
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
  studio,
};
