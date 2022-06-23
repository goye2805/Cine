import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import MovieDetail from "./MovieDetail"


const MoviesContainer = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState()
    const [star, setStar] = useState(5)

    const getMovies = async (URL) => {

        const response = await fetch(URL)
        const data = await response.json()
        let filterMovies = data.results.filter(x => x.vote_average <= 2 * (star === 0 ? 5 : star))


        setMovies(filterMovies)


    }

    useEffect(() => {
        getMovies("https://api.themoviedb.org/3/discover/movie?api_key=cf8aa8acc22358a02eef47f495c7555a")
    }, [])

    useEffect(() => {
        handleKeyDown()
    }, [star])


    function handleKeyDown(event = { keyCode: 13 }) {


        if (event.keyCode === 13) {

            let URLm = ''

            if (!search || search === '') {

                URLm = 'https://api.themoviedb.org/3/discover/movie?api_key=cf8aa8acc22358a02eef47f495c7555a'

            } else {

                URLm = "https://api.themoviedb.org/3/search/movie?api_key=cf8aa8acc22358a02eef47f495c7555a&query=" + search

            }


            getMovies(URLm)
        }
    }


    function SearchStar(e) {
        let valor = parseInt(e.target.value)
        if (star === valor) {
            valor = 0
        }
        setStar(valor)
    }


    return (


        <div>
            <div
                className="hero h-full"
                style={{
                    backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg')`,
                }}
            >
                {/* filtro por nombre */}

                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div>
                            <h1 className="mb-5 text-4xl font-bold">Busca tu pelicula favorita</h1>

                            <div class="rating" id="asd">
                                <input type="radio" name="rating-9" class="rating-hidden" value={0} onClick={SearchStar} checked={star === 0} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={1} onClick={SearchStar} checked={star === 1} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={2} onClick={SearchStar} checked={star === 2} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={3} onClick={SearchStar} checked={star === 3} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={4} onClick={SearchStar} checked={star === 4} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={5} onClick={SearchStar} checked={star === 5} />
                            </div>
                        </div>

                        <div className="">

                            <input type="text" placeholder="Buscar" className="form-control" onChange={event => setSearch(event.target.value)} onKeyDown={handleKeyDown} />
                        </div>
                    </div>
                </div>

            </div>

            {/* Resultado*/}
            <div>
                <div className="d-flex flex-wrap bg-black">
                    {movies?.map(m =>
                        <div>
                            <MovieDetail key={m.id} movies={m} />
                        </div >)}
                </div>
            </div>

            <Footer />

        </div >
    )
}

export default MoviesContainer