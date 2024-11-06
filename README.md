# React-Props

# React Props Contact Cards App

A simple React application that displays a list of contact cards, each containing a name, image, phone number, and email address. This project demonstrates the use of props to create reusable components in React.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technologies](#technologies)
6. [Folder Structure](#folder-structure)
7. [Scripts](#scripts)
8. [License](#license)

## Overview

The React Props Contact Cards App showcases how to use React props to create a reusable `Card` component, rendering multiple contacts in a consistent format. Each contact card includes details such as the contact's name, image, phone number, and email address.

## Installation

### Prerequisites

- Node.js (version 14 or above)
- npm (version 6 or above)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git


## Navigate to the project directory:

bash
cd your-repo

**Install the dependencies:**

bash
npm install

**Start the development server:**

bash
npm start
Open your browser and go to http://localhost:3000 to view the app.

## Usage
To add or modify contacts, update the ReactDOM.render function in src/index.js by adding more Card components with different properties. Each Card component displays a name, image, phone number, and email address.

**Example:**
javascript

<Card
  name="Elon Musk"
  img="https://example.com/elon.jpg"
  tel="+987 654 321"
  email="elon@musk.com"
/>

## Features
- Reusable Card Component: The Card component accepts name, img, tel, and email as props, making it easy to render any contact.
- Contact List Display: Displays a styled list of contacts, each with relevant details.

## Technologies
- React 18.3.1
- JavaScript (ES6+)
- TypeScript 3.3.3 (development)

## Scripts
The following scripts are available in the project:

start: Runs the app in development mode with react-scripts start.
build: Builds the app for production using react-scripts build.
test: Runs the test suite with react-scripts test --env=jsdom.
eject: Ejects the app from Create React App configuration.

## License
This project is licensed under the MIT License.
