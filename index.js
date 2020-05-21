const configureAndStartMongoose = require('./api/config/mongoose');
const createServer = require('./api/server');
const { buildIndex } = require('./build-index');
const { config } = require('dotenv');

config();

async function init () {
  await configureAndStartMongoose();
  const server = createServer();

  // Build index.html
  buildIndex({});

  server.listen(process.env.PORT, async () => {
    console.log(`Listening at http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
  });
}

init();

// Catch any uncaught exceptions in this application
process.on('uncaughtException', (err) => {
  console.log(`There was an uncaught exception: ${err}`);
});

// Catch any unhandled rejections in this application
process.on('unhandledRejection', (err) => {
  console.log(`There was an unhandled rejection: ${err}`);
});
