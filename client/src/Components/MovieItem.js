import React from "react";
import "./MoviePage.css";
import { handleMovieAdd, handleMovieRemove } from "../helpers/favorites";

const MovieItem = ({
  movies,
  imageUrls,
  showMovieDetails,
  setShowMovieDetails,
  showDeleteIcon = false,
}) => {
  const handleDeleteClick = (movie) => {
    handleMovieRemove(movie);
    window.location.reload();
  };

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
             {!showDeleteIcon && <svg
                viewBox="0 0 384 512"
                className="title-poster-ribbon"
                onClick={() => handleMovieAdd(movie)}
              >
                <path
                  fill="currentColor"
                  d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
                ></path>
              </svg>}

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
              {!showDeleteIcon && <svg
                className="reportSign"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>exclamation</title>
                <path d="M10.656 8.864q0-2.208 1.568-3.776t3.776-1.568 3.776 1.568 1.6 3.776q0 0.256-0.064 0.448l-1.76 6.944q-0.096 1.408-1.12 2.368t-2.432 0.96q-1.376 0-2.4-0.928t-1.152-2.304q-0.32-0.96-0.672-2.112t-0.736-2.784-0.384-2.592zM12.416 24.928q0-1.472 1.056-2.496t2.528-1.056 2.528 1.056 1.056 2.496q0 1.504-1.056 2.528t-2.528 1.056-2.528-1.056-1.056-2.528z" />
              </svg>}
              {showDeleteIcon && (
                <svg
                  className="deleteFav"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleDeleteClick(movie)}
                >
                  <path
                    d="M12.0004 9.5L17.0004 14.5M17.0004 9.5L12.0004 14.5M4.50823 13.9546L7.43966 17.7546C7.79218 18.2115 7.96843 18.44 8.18975 18.6047C8.38579 18.7505 8.6069 18.8592 8.84212 18.9253C9.10766 19 9.39623 19 9.97336 19H17.8004C18.9205 19 19.4806 19 19.9084 18.782C20.2847 18.5903 20.5907 18.2843 20.7824 17.908C21.0004 17.4802 21.0004 16.9201 21.0004 15.8V8.2C21.0004 7.0799 21.0004 6.51984 20.7824 6.09202C20.5907 5.71569 20.2847 5.40973 19.9084 5.21799C19.4806 5 18.9205 5 17.8004 5H9.97336C9.39623 5 9.10766 5 8.84212 5.07467C8.6069 5.14081 8.38579 5.2495 8.18975 5.39534C7.96843 5.55998 7.79218 5.78846 7.43966 6.24543L4.50823 10.0454C3.96863 10.7449 3.69883 11.0947 3.59505 11.4804C3.50347 11.8207 3.50347 12.1793 3.59505 12.5196C3.69883 12.9053 3.96863 13.2551 4.50823 13.9546Z"
                    stroke="#000000"
                  />
                </svg>
              )}
            </div>
          )}

          {getEveryMovieDiv(movie, index)}
        </div>
      ))}
    </div>
  );
};

export default MovieItem;
