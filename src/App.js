import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviesContainer from './MoviesContainer';
import Movie from './Movie';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route
            path="/" element={<MoviesContainer />} />

          <Route path="/movie/:id" element={<Movie />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
