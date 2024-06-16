const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const faker = require('faker');

// temporary storage to fake a database
let temporaryStoredProfiles = Array.from({length: 10}, () => ({
  name: faker.name.firstName() + " " + faker.name.lastName(),
  email: faker.internet.email(),
  location: faker.address.city(),
  skills: [mockSkills()],
  projects: [mockProjects()]
}));

// Get all profiles
router.get('/', async (req, res) => {
  res.json(temporaryStoredProfiles);
});

// Get a specific profile
router.get('/:id', async (req, res) => {
  const profileId = req.params.id;
  const profile = temporaryStoredProfiles.find(profile => profile.id === profileId);
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({message: 'Profile not found'});
  }
});

// Create a new profile
router.post('/', async (req, res) => {
  const newProfile = new Profile(req.body);
  temporaryStoredProfiles.push(newProfile);
  res.json(newProfile);
});

// Update a profile
router.put('/:id', async (req, res) => {
  const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true});
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
  return [Array.from({length: Math.floor(Math.random() * 10)}, () => ({
    name: faker.lorem.word(),
    experience: Math.floor(Math.random() * 5) + 1
  }))]
}

function mockProjects() {
  return [Array.from({length: Math.floor(Math.random() * 5)}, () => ({
    name: faker.lorem.word(),
    description: faker.lorem.paragraph()
  }))]
}
