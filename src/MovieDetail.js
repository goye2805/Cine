const MovieDetail = ({ movies }) => {

    const URL = "https://image.tmdb.org/t/p/w500" + movies.poster_path


    return (
        <div >
            <div className="container m-8">
                <strong>{movies.title}</strong>
                <div><img src={URL}
                    alt={""}
                    width="335" height="400"
                />
                </div>
            </div >
        </div >
    )
}
export default MovieDetail