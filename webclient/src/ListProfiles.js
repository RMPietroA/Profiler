import React, { useState, useEffect } from 'react';

function ListProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/profiles')
      .then(response => response.json())
      .then(data => {
        const sortedProfiles = data.sort((a, b) => a.name.localeCompare(b.name));
        setProfiles(sortedProfiles);
      });
  }, []);

  return (
    <div>
      <h1>List of Profiles</h1>
      {profiles.map(profile => (
        <div key={profile.id}>
          <h2>{profile.name}</h2>
          <p>{profile.email}</p>
          <p>{profile.location}</p>
          <p>Skills: {profile.skills.join(', ')}</p>
          <p>Projects: {profile.projects.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default ListProfiles;
