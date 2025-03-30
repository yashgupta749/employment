# EmployWise management

## Overview

This is a React application that integrates with the Reqres API to perform basic user management functions. The application consists of authentication, user listing, and user management features.

## Features

### Level 1: Authentication

- A login screen where users authenticate using the credentials:
  - **Email**: eve.holt@reqres.in
  - **Password**: cityslicka

### Level 2: List All Users

- Fetches users from the API using pagination.

### Level 3: Edit, Delete, and Update Users

- **Edit**:
  - Users can update their first name, last name, and email.
- **Delete**:
  - Users can be removed from the list using the DELETE endpoint.
  - The UI updates accordingly after deletion.

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/yashgupta749/employwise-frontend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd employwise-frontend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn start
    ```
5. Open the browser and visit `http://localhost:3000`
