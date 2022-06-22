import { Link } from "react-router-dom"

const MovieDetail = ({ movies }) => {

    const URL = "https://image.tmdb.org/t/p/w500" + movies.poster_path



    return (
        <div >
            <div className="container m-8">

                <div><Link to={`/movie/${movies.id}`}><img src={URL}
                    alt={""}
                    width="335" height="400" /></Link>

                </div>
            </div >
        </div >
    )
}
export default MovieDetail