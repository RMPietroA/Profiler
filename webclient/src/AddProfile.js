import React, { useState } from 'react';

function AddProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const profile = {
      name,
      email,
      location,
      skills,
      projects,
    };

    await fetch('http://localhost:8000/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    });

    setName('');
    setEmail('');
    setLocation('');
    setSkills([]);
    setProjects([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      {/* You might want to create separate components for adding skills and projects */}
      <input type="submit" value="Add Profile" />
    </form>
  );
}

export default AddProfile;
