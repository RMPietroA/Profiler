const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

// Get all profiles
router.get('/', async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

// Get a specific profile
router.get('/:id', async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  res.json(profile);
});

// Create a new profile
router.post('/', async (req, res) => {
  const newProfile = new Profile(req.body);
  const savedProfile = await newProfile.save();
  res.json(savedProfile);
});

// Update a profile
router.put('/:id', async (req, res) => {
  const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProfile);
});

// Delete a profile
router.delete('/:id', async (req, res) => {
  const deletedProfile = await Profile.findByIdAndDelete(req.params.id);
  res.json(deletedProfile);
});

module.exports = router;
