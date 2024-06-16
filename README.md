# Profiler

This is a web application to save employee profiles containing skills and projects.

## Technologies
- Backend
  - Node.js
  - Express
- Frontend
  - React
- RESTful endpoints (for communication between frontend and backend)

## Details
The app is multi-modal. It has the following modules:

### Profile Overview (starting point)
- a form to add a new profile.
- The employee profile contains the following fields:
  - Name
  - Email
  - Location

### Skills
- every profile can have multiple skills.
- a form to add a new skill to a profile.
- a list of all skills for a profile.
- a skill contains following information:
  - Name
  - Level (1-5)

### Projects
- every profile can have multiple projects.
- a form to add a new project to a profile.
- a list of all projects for a profile.
- a project contains following information:
  - Name
  - Description
  - Start Date
  - End Date
- a project can have multiple skills associated with it.
