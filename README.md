# WEBD 172 Homework 6 – React API Explorer

A simple React application created for WEBD 172 to practice fetching data from a public API, displaying reusable components, and filtering users through a search feature.

## Project Overview

This application retrieves user information from the JSONPlaceholder API and displays a searchable user directory.

Each user card displays:
- Name
- Email address
- Company name

## Features

- Fetches user data from a public API using `fetch()` and `useEffect()`
- Stores user data and search input using `useState()`
- Displays user information using a reusable `UserCard` component
- Uses `map()` to render user cards with unique keys
- Filters users by name using `filter()`
- Supports case-insensitive searching
- Includes basic CSS for a clean, organized layout

## Technologies Used

- React
- JavaScript
- Vite
- HTML
- CSS

## API

This project uses the JSONPlaceholder Users API:

https://jsonplaceholder.typicode.com/users

## Running the Project Locally

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in the terminal.

## Course

WEBD 172 – Full-Stack JavaScript

Homework 6 – React API Explorer