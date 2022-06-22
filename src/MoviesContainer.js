import React, { useEffect, useState } from "react"
import MovieDetail from "./MovieDetail"




const MoviesContainer = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState()
    let star = 5




    const getMovies = async (URL) => {

        //const URL = "https://api.themoviedb.org/3/discover/movie?api_key=cf8aa8acc22358a02eef47f495c7555a"

        const response = await fetch(URL)
        const data = await response.json()

        let filterMovies = data.results.filter(x => x.vote_average <= 2 * star)


        setMovies(filterMovies)


    }

    useEffect(() => {
        getMovies("https://api.themoviedb.org/3/discover/movie?api_key=cf8aa8acc22358a02eef47f495c7555a")
    }, [])



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

        if (star === parseInt(e.target.value)) {
            star = 5
        }
        else {
            star = parseInt(e.target.value)
        }

        handleKeyDown()
    }


    return (


        <div className="container mt-3">
            <div
                className="hero h-full"
                style={{
                    backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg')`,
                }}
            >
                {
                    //filtro por nombre
                }

                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div>
                            <h1 className="mb-5 text-4xl font-bold">Busca tu pelicula favorita</h1>

                            <div class="rating">
                                <input type="radio" name="rating-1" class="mask mask-star" value={1} onClick={SearchStar} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={2} onClick={SearchStar} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={3} onClick={SearchStar} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={4} onClick={SearchStar} />
                                <input type="radio" name="rating-1" class="mask mask-star" value={5} onClick={SearchStar} />
                            </div>
                        </div>

                        <div className="">

                            <input type="text" placeholder="Buscar" className="form-control" onChange={event => setSearch(event.target.value)} onKeyDown={handleKeyDown} />
                        </div>
                    </div>
                </div>

            </div>

            {
                //Resultado
            }
            <div>
                <div className="d-flex flex-wrap container p-8">
                    {movies?.map(m =>
                        <div>
                            <MovieDetail key={m.id} movies={m} />
                        </div >)}
                </div>
            </div>

        </div >
    )
}

export default MoviesContainer