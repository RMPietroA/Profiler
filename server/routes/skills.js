const express = require('express');
const router = express.Router();
const Skill = require('../models/skill');

// Get all skills
router.get('/', async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// Get a specific skill
router.get('/:id', async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  res.json(skill);
});

// Create a new skill
router.post('/', async (req, res) => {
  const newSkill = new Skill(req.body);
  const savedSkill = await newSkill.save();
  res.json(savedSkill);
});

// Update a skill
router.put('/:id', async (req, res) => {
  const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedSkill);
});

// Delete a skill
router.delete('/:id', async (req, res) => {
  const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
  res.json(deletedSkill);
});

module.exports = router;
