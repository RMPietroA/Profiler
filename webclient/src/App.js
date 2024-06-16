import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProfile from './AddProfile';
import ListProfiles from './ListProfiles';
import './App.css';
import './Menu.css';
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link className="navbar-item" to="/">List all profiles</Link>
            </li>
            <li>
              <Link className="navbar-item" to="/add-profile">Add profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ListProfiles />} />
          <Route path="/add-profile" element={<AddProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
