# MovieLand

MovieLand is a simple web application that allows users to search for movies and view movie details. It uses the OMDB API to fetch movie data and display it in a user-friendly way.

![Screenshot](screenshot.png)

## Features

- Search for movies by title.
- View movie details, including title, year, poster, and type.

## Technologies Used

- React
- OMDB API
- CSS for styling

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
```git clone https://github.com/your-username/MovieLand.git```

2. Install the required dependencies:
```npm install```

3. Obtain an API key from OMDB by signing up at [OMDB API](http://www.omdbapi.com/apikey.aspx).

4. In the `App.js` file, replace the value of `api_key` with your own API key:

```const api_key = 'your-api-key-here';```

## Starting the development Server

1. Start the development Server
```npm start```

2. Open your web browser and go to http://localhost:3000 to use MovieLand.

## Usage
1. Enter a movie title in the search bar and click the search icon to find movies.
2. Click on a movie card to view its details.