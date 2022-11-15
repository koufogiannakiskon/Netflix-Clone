import React, { useState } from 'react'
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchData();
    }, []);

    return (
        <header>

        </header>
    )
}

export default Banner
