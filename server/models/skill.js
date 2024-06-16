const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  proficiency: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
  // Add other fields as necessary
});

module.exports = mongoose.model('Skill', SkillSchema);
