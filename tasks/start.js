const { sh } = require('tasksfile');

function dev() {
  return sh('nodemon -r dotenv/config -r esm src/index.js', { nopipe: true });
}

function start() {
  sh('node -r esm src/index.js', { nopipe: true });
}

module.exports = {
  default: start,
  dev,
};
