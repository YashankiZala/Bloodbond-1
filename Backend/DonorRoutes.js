const express = require('express');
const router = express.Router();
const Donor = require('./Donor');

// Fetch all donors or filter by blood group and location
router.get('/search', async (req, res) => {
  const { bloodGroup, location } = req.query;
  const filters = {};
  if (bloodGroup) filters.bloodGroup = bloodGroup;
  if (location) filters.location = location;

  try {
    const donors = await Donor.find(filters);
    return res.json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donors', error });
  }
});

// Fetch a specific donor by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const donor = await Donor.findById(id);
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    res.json(donor);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donor details', error });
  }
});

module.exports = router;
