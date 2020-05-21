const mongoose = require('mongoose');
const { config } = require('dotenv');

config();

let mongooseConnection;

/**
 *  Connect to MongoDB
 *  @returns {Promise<import('mongoose').Mongoose>}
 */
async function configureAndStartMongoose (mongoUri = process.env.MONGO_URI, forceResfresh = false) {
  if (!mongoUri) {
    console.log('MONGO_URI environment variable has not been set');
    process.exit(1);
  }
  if (mongooseConnection && !forceResfresh) { return mongooseConnection; }

  try {
    /** @type {import('mongoose').ConnectionOptions} */
    const mongooseOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    };

    mongooseConnection = await mongoose.connect(mongoUri, mongooseOptions);

    if (process.env.NODE_ENV === 'development') {
      mongooseConnection.set('debug', true);
    }

    return mongooseConnection;
  } catch (e) {
    console.log('Error while connecting to MongoDB');
    console.log(e);
    process.exit(-1);
  }
};

module.exports = configureAndStartMongoose;
