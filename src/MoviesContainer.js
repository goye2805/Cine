import React, { useEffect, useState } from "react"
import MovieDetail from "./MovieDetail"



const MoviesContainer = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")



    const URL = "https://api.themoviedb.org/3/discover/movie?api_key=cf8aa8acc22358a02eef47f495c7555a"


    const getMovies = async () => {

        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        setMovies(data)
    }

    useEffect(() => {
        getMovies()
    }, [])

    let resul = []

    //busqueda por nombre
    const searcher = (e) => {
        setSearch(e.target.value)
    }


    if (!search) {
        resul = movies.results
    }
    else {

        resul = movies.results.filter((dato) =>
            dato.title.toLowerCase().includes(search.toLocaleLowerCase())// && dato.vote_average < rating)
        )
    }


    return (


        <div className="container mt-3">
            <div
                className="hero "
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

                        <h1 className="mb-5 text-4xl font-bold">Busca tu pelicula favorita</h1>

                        <div className="">
                            <input value={search} onChange={searcher} type="text" placeholder="Buscar" className="form-control" />

                        </div>
                    </div>
                </div>

            </div>

            {
                //Resultado
            }
            <div>
                <div className="d-flex flex-wrap container p-8">
                    {resul?.map(m =>
                        <div>
                            <MovieDetail key={m.id} movies={m} />
                        </div >)}
                </div>
            </div>

        </div>
    )
}
export default MoviesContainer