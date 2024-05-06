const mongoose = require('mongoose');

// Define schema for the Bet object
const betSchema = new mongoose.Schema({
  betTitle: { type: String, required: true },
  teamOne: {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    odds: { type: Number, required: true },
  },
  teamTwo: {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    odds: { type: Number, required: true },
  },
  closingTime: { type: Date, required: true },
});

// Create a model based on the schema
const BetModel = mongoose.model('Bet', betSchema);

module.exports = BetModel;
