import React from "react";

function Movies({ movie }) {
  console.log(movie);
  return (
    <div className='shadow-md py-8 px-5 rounded-lg  bg-red-500 hover:bg-red-600'>
      <span className='text-white'>ID: {movie?.id}</span>
      <h2 className='text-white font-extrabold text-2xl'>{movie?.title}</h2>
    </div>
  );
}

export default Movies;
