import { useState } from "react";
import Movies from "./components/Movies";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./App.css";

//json of movieslist
const moviesList = [
  { id: 2, title: "Movie B" },
  { id: 3, title: "Movie C" },
  { id: 1, title: "Movie A" },
];

function App() {
  const [sorted, setSorted] = useState(false);
  const [sortMovies, setSortMovies] = useState(moviesList || []);

  //sort function
  const toggleMoviesHandler = () => {
    setSorted(!sorted);
    if (!sorted) {
      setSortMovies(sortMovies?.sort((a, b) => a.id - b.id));
    } else {
      setSortMovies(sortMovies?.sort((a, b) => b.id - a.id));
    }
  };

  return (
    <div className='App'>
      <div class='container mx-auto px-4 py-8 sm:px-8 max-w-screen-lg'>
        <div className='flex justify-center mt-5'>
          <button
            onClick={() => toggleMoviesHandler()}
            type='button'
            className='px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full transition duration-150 ease-in-out'
          >
            {!sorted ? (
              <span className='flex align-middle gap-2'>
                Sort By ID <FaArrowUp size={14} />
              </span>
            ) : (
              <span className='flex align-middle gap-2'>
                Sort By ID <FaArrowDown size={14} />
              </span>
            )}
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-6 mt-5'>
          {sortMovies?.map((movie) => (
            <Movies
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
