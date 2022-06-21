
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Movie = () => {

    const styles = {
        title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
        subtitle: "font-medium text-base text-gray-600 tracking-wider leading-normal uppercase",
        text: "font-regular text-sm text-gray-600 tracking-wide leading-normal",
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs tracking-wider leading-normal uppercase select-none",
        symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
        counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
    }


    const [movies, setMovies] = useState([])


    const URL = "https://api.themoviedb.org/3/discover/movie?api_key=cf8aa8acc22358a02eef47f495c7555a"

    const { id } = useParams()

    const getMovies = async () => {

        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        data.results.forEach(m => {
            if (id == m.id) {
                //console.log(m.title)
                setMovies(m)
            }
        });
    }

    useEffect(() => {
        getMovies()
    }, [])




    return (

        <div className="mx-auto flex flex-wrap gap-20 justify-center bg-white">

            <div className="flex flex-col lg:flex-row max-w-full lg:max-w-7xl mx-auto justify-center items-center lg:items-start">
                <div className="group relative lg:w-1/2 overflow-hidden">
                    <img
                        src={"https://image.tmdb.org/t/p/w500" + movies.poster_path}
                        alt={""}
                        className="p-6"
                    />
                </div>

                <div className="w-full px-6 lg:py-6 lg:w-1/2">

                    {/* Información */}
                    <div className="flex flex-col justify-between">
                        <h1 className={styles.title}>{movies.title}</h1>
                    </div>
                    <h2 className={"mt-4 " + (styles.highlight)}>Titulo Original</h2>
                    <p className={"mt-4 " + (styles.subtitle)}>{movies.original_title}</p>
                    <hr className="border-gray-200 w-full mt-4" />

                    <h2 className={"mt-4 " + (styles.highlight)}>Lenguaje Original</h2>
                    <p className={"mt-2 " + (styles.text)}>{movies.original_language}</p>

                    <h2 className={"mt-4 " + (styles.highlight)}>Año</h2>
                    <p className={"mt-2 " + (styles.text)}>{movies.release_date}</p>
                    <hr className="border-gray-200 w-full mt-4" />

                    <h2 className={"mt-4 " + (styles.highlight)}>Descripción</h2>
                    <p className={"mt-2 " + (styles.text)}>{movies.overview}</p>


                    <hr className="border-gray-200 w-full mt-4" />

                </div>

            </div>

        </div>
    )
}
export default Movie