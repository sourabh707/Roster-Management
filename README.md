### Roster Management System

This repository contains the backend for a Roster Management System, designed to manage employee schedules and track attendance efficiently. The system includes authentication, roster management, and attendance tracking functionalities.

## Project Overview

The Roster Management System allows organizations to:

- **Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **Roster Management**: CRUD operations for managing employee details, including name, email, role, and shift schedule.
- **Attendance Tracking**: Record and manage employee attendance, including marking attendance, viewing attendance history, etc.


## Getting Started

To get started with the Roster Management System, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed locally or accessible remotely

### Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/sourabh707/Roster-Management.git>

2. Install dependencies:

   ```bash
    npm install

3. Set up environment variables:

   Create a .env file in the root directory.
   Add necessary environment variables like database connection URL, JWT secret, etc.

4. Start the server:

    ```bash
    npm start

5. Usage
Use Postman or a similar tool to test the API endpoints defined in routes/ for authentication, roster management, and attendance tracking.
Development
Modify controllers, models, or routes as per your application's requirements.

6. Run in development mode:
  ```bash
  npm run server

