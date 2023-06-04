## Getting Started

To run the project, use the following command: 
- npm install
- npm run dev

# User Cards

This project provides the frontend implementation for the Full Stack Developer role. Implemented authentication of users, the endpoint for creating tweets with the ability to update and delete them.

## Features

A user authentication function has been implemented to allow users to securely register, log in, and log out of the system. User sessions are managed using JSON Tokens (JWT). User credentials are stored securely in the database.
An API endpoint has been created that will allow users to create tweets on the system. The endpoint accepts the following payload:
email: email of the user who created the tweet (string).
hashtags: any hashtags associated with the tweet (an array of strings or comma-separated strings).
content: the content of the tweet (maximum 280 characters).
All information about
tweets are stored in a database for later retrieval and analysis.

## Technologies Used

Technologies Used
The frontend of the project utilizes the following technologies:
React: A JavaScript library for building user interfaces. Version 18.2.0 is used in this project.
React Router DOM: A routing library for React that enables navigation and URL handling in the application. Version 6.11.2 is used.
React Redux: A library for managing the state of the application. Version 8.0.5 is used.
Redux Toolkit: A package that simplifies the usage of Redux by providing utilities for efficient state management. Version 1.9.5 is used.
Axios: A popular library for making HTTP requests. Version 1.4.0 is used.
Moment: A library for parsing, validating, manipulating, and formatting dates. Version 2.29.1 is used.
React Icons: A library that provides a collection of popular icons as React components. Version 4.9.0 is used.
React Moment: A package that allows you to format dates and times in React using Moment.js. Version 1.1.3 is used.
React Loader Spinner: A component that displays a loading spinner. Version 5.3.4 is used.
React Toastify: A notification library for React. Version 9.1.3 is used.