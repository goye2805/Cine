import { useEffect, useState } from "react"



const MoviesContainer = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    const URL = "https://api.themoviedb.org/3/discover/movie?api_key=cf8aa8acc22358a02eef47f495c7555a"

    useEffect(() => {
        getMovies()
    }, [])


    const getMovies = async () => {

        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        setMovies(data)
    }


    return (

        <div className="container mt-3">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg')`,
                }}
            >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">

                        <h1 className="mb-5 text-xl font-bold">Busca tu pelicula favorita</h1>

                        <div className="">
                            <input type="text" placeholder="Buscar" className="form-control" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap">

                {movies?.results?.map(m =>
                    <div className="container m-8">
                        <strong>{m.title}</strong>
                    </div >)}
            </div>
        </div>
    )
}
export default MoviesContainer