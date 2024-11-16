const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String }, // Add address field
  contactNumber: { type: String } // Add contact number field
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
