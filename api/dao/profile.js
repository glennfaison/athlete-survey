const { Schema, model } = require('mongoose');
const { MaritalStatus, Sports } = require('../enums');

const ProfileSchema = new Schema({
  name: {
    type: Schema.Types.String,
    trim: true,
  },
  dateOfBirth: {
    type: Schema.Types.Date,
  },
  nationality: {
    type: Schema.Types.String,
    trim: true,
  },
  location: {
    type: Schema.Types.String,
    trim: true,
  },
  association: {
    type: Schema.Types.String,
    trim: true,
  },
  team: {
    type: Schema.Types.String,
    trim: true,
  },
  gender: {
    type: Schema.Types.String,
    trim: true,
  },
  Sports: [{
    type: Schema.Types.String,
    trim: true,
    enum: Object.values(Sports)
  }],
  about: {
    type: Schema.Types.String,
    trim: true,
  },
  interests: [{
    type: Schema.Types.String,
    trim: true,
  }],
  charities: [{
    type: Schema.Types.String,
    trim: true,
  }],
  socialMediaHandles: {
    facebook: {
      type: Schema.Types.String,
      trim: true,
    },
    twitter: {
      type: Schema.Types.String,
      trim: true,
    },
    instagram: {
      type: Schema.Types.String,
      trim: true,
    },
    youtube: {
      type: Schema.Types.String,
      trim: true,
    },
    twitch: {
      type: Schema.Types.String,
      trim: true,
    },
    snapchat: {
      type: Schema.Types.String,
      trim: true,
    },
  },
  pets: [{
    type: Schema.Types.String,
    trim: true,
  }],
  drinksAlcohol: {
    type: Schema.Types.String,
    trim: true,
  },
  maritalStatus: {
    type: Schema.Types.String,
    trim: true,
    enum: Object.values(MaritalStatus),
  },
  profileImage: {
    type: Schema.Types.String,
    trim: true,
  },
});

const ProfileDao = model('Profiles', ProfileSchema, 'Profiles');

module.exports = ProfileDao;
