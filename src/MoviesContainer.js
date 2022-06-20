import { useEffect, useState } from "react"


const MoviesContainer = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        const URL = "https://api.themoviedb.org/3/discover/movie?api_key=cf8aa8acc22358a02eef47f495c7555a"

        fetch(URL)
            .then(response => response.json())
            //.then(data => console.log(data))
            .then(data => setMovies(data.results))
    }

    return (
        <div className="container mt-3">
            <div className="d-flex flex-wrap">
                {movies.map(m =>
                    <div className="container m-8">
                        <strong>{m.title}</strong>
                    </div >)}
            </div>
        </div>
    )
}
export default MoviesContainer