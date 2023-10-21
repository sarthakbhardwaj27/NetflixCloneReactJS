import React, { useEffect } from "react";


const api_key = '97ca7bc6';
const API_URL = 'http://www.omdbapi.com?apikey=97ca7bc6';

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(()=>{
    searchMovies('spiderman')
  },[]);

  return (
    <h1>App</h1>
  );
}

export default App;
