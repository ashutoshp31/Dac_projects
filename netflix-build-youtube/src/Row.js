import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchDdata() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }

        fetchDdata();
    }, [fetchUrl]);

    {/*1- useEffect is a React hook that allows performing side effects in functional components. 
    It takes two arguments: a function and a dependency array.

    2-Inside fetchData, it sends an asynchronous request using Axios to fetch data from the fetchUrl.
    3-Once the request is resolved, it sets the state using setMovies(request.data.results),
     presumably updating some state variable (movies) with the fetched data.
    4-The fetchData() function is then called when the component mounts or when the fetchUrl dependency changes.
     This behavior is controlled by the dependency array ([fetchUrl]).
    5-If the fetchUrl changes, the effect will run again, fetching data with the updated URL.
    6-If the fetchUrl remains the same across renders, the effect won't run again unless the component unmounts and 
    remounts or there's a change in any other dependency.
    7-This code snippet is typically used to fetch data from an API endpoint when the component mounts
     (or when the fetchUrl dependency changes) and updates the component's state (movies) with the fetched data. 
    The useEffect hook is essential for managing side effects in React components and is commonly used for data fetching, 
    subscriptions, setting up event listeners, and more.*/}

    return (
        <div className='row'>
            <h2>{title}</h2>
            {/*1-movies.map() is a method used to iterate through each item in the movies array.
2-For each movie in the movies array, it generates an <img> element.
3-The src attribute of the <img> element is set dynamically using a template
 literal ${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}
 4-This code  generates a list of movie images (<img>) based on the movies array, using different image paths (poster_path or backdrop_path)
  depending on the value of isLargeRow. 
 The resulting JSX markup will display a series of movie images in the component.*/}
           <div className="row_posters">
            {movies.map(movie => (
                /*to remove the dead links we do this*/
               (( isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    
                <img className={`row_poster ${isLargeRow  && "row_posterLarge"}`} 
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name} />
                )
            
            ))}
            </div>
        </div>
    )
}

export default Row
