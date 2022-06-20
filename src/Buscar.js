import MoviesContainer from "./MoviesContainer"



const Buscar = () => {
    return (
        <div>
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
                            <input type="text" placeholder="Buscar" />
                            <button class="btn btn-primary" type="button">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

            <MoviesContainer />
        </div>
    )
}
export default Buscar