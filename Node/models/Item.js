const mongoose = require('mongoose');

const geometrySchema = new mongoose.Schema({
  type: String,
  coordinates: {
    type: [Number]
  }
});

const propertiesSchema = new mongoose.Schema({
  Code: String,
  Name: String
});

const npsSchema = new mongoose.Schema({
  type: String,
  properties: propertiesSchema,
  geometry: geometrySchema
});

const NPS = mongoose.model('NPS', npsSchema, 'NPS');

module.exports = NPS;
