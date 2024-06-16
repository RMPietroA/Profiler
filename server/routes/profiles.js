const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const faker = require('faker');

// Get all profiles
router.get('/', async (req, res) => {
  // Mock data
  const mockProfiles = Array.from({ length: 10 }, () => ({
    name: faker.name.firstName() + " " + faker.name.lastName(),
    email: faker.internet.email(),
    location: faker.address.city(),
    skills: [mockSkills()],
    projects: [mockProjects()]
  }));

  res.json(mockProfiles);
});

// Get a specific profile
router.get('/:id', async (req, res) => {
  // Mock data
  const mockProfile = {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    email: faker.internet.email(),
    location: faker.address.city(),
    skills: [mockSkills()],
    projects: [mockProjects()]
  };
  res.json(mockProfile);
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

// helper functions
function mockSkills() {
  return [Array.from({ length: Math.floor(Math.random() * 10) }, () => ({
      name: faker.lorem.word(),
      experience: Math.floor(Math.random() * 5) + 1
  }))]
}

function mockProjects() {
  return [Array.from({ length: Math.floor(Math.random() * 5) }, () => ({
    name: faker.lorem.word(),
    description: faker.lorem.paragraph()
  }))]
}
