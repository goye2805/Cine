import { Link } from "react-router-dom"
import Footer from "./Footer"

const MovieDetail = ({ movies }) => {

    const URL = "https://image.tmdb.org/t/p/w500" + movies.poster_path



    return (
        <div >
            <div className="container m-8">

                <div><Link to={`/movie/${movies.id}`}><img src={URL}
                    alt={""}
                    width="200" height="380" /></Link>
                </div>
            </div >
        </div >
    )
}
export default MovieDetail