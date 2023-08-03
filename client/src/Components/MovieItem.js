import React from "react";
import "./MoviePage.css";

const MovieItem = ({
  movies,
  imageUrls,
  showMovieDetails,
  setShowMovieDetails,
}) => {
  const getEveryMovieDiv = (clickedMovie, index) => {
    if (showMovieDetails === index) {
      return (
        <div>
          <div className="overlay" />
          <div className="individualMovieDetails">
            {imageUrls[index] && (
              <>
                <img
                  className={"a" + clickedMovie.id + "a"}
                  src={imageUrls[index]}
                  alt={`Backdrop of ${clickedMovie.title || clickedMovie.name}`}
                />
                <div className="titlePart">
                  Title: {clickedMovie.title || clickedMovie.name}
                </div>
                <div className="releaseDatePart">
                  Release date:{" "}
                  {clickedMovie.release_date || clickedMovie.first_air_date}
                </div>
                <p className="overviewPart">{clickedMovie.overview}</p>
                <button
                  className="closeButton"
                  onClick={() => setShowMovieDetails(null)}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="allMoviesDiv">
      {movies.map((movie, index) => (
        <div key={index} className="movieDiv">
          {imageUrls[index] && (
            <div className="moviePosterContainer">
              <svg
                focusable="false"
                data-prefix="fas"
                data-icon="bookmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="title-poster-ribbon"
              >
                <path
                  fill="currentColor"
                  d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
                ></path>
              </svg>

              <img
                src={imageUrls[index]}
                alt={`Backdrop of ${movie.title || movie.name}`}
              />
              <h2 className="movieTitle">{movie.title || movie.name}</h2>
              <button
                className="movieButtonInfo"
                onClick={() => setShowMovieDetails(index)}
              >
                Movie Details
              </button>
            </div>
          )}

          {getEveryMovieDiv(movie, index)}
        </div>
      ))}
    </div>
  );
};

export default MovieItem;
