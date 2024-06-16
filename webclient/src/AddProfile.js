import React, { useState } from 'react';

function AddProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const profile = {
      name,
      email,
      location,
      skills,
      projects,
    };

    try {
      const response = await fetch('http://localhost:8000/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setName('');
      setEmail('');
      setLocation('');
      setSkills([]);
      setProjects([]);
      setErrorMessage(null);
    } catch (error) {
      let message = error.message;
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        message = 'Unable to connect to the server. Please try again later.';
      }
      setErrorMessage(message);

      // Auto-hide the error message after 5 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      {errorMessage && <div className="error">{errorMessage}</div>}
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
    </div>
  );
}

export default AddProfile;
