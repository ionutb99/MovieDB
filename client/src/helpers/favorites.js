// favorite.js page
export const getFavoritesFromSessionStorage = () => {
  const moviesData = sessionStorage.getItem("moviesData");
  return moviesData ? JSON.parse(moviesData) : [];
};

export const handleMovieAdd = (clickedMovie) => {
    const moviesData = sessionStorage.getItem("moviesData");
    let movieArray = [];

    if (moviesData) {
      movieArray = JSON.parse(moviesData);
      console.log(movieArray);
    }
    const movieExists = movieArray.some(
      (movie) => movie.id === clickedMovie.id
    );

    if (!movieExists) {
      movieArray.push(clickedMovie);
      const movieJson = JSON.stringify(movieArray);
      sessionStorage.setItem("moviesData", movieJson);
    }
  };

  export const handleMovieRemove = (clickedMovie) => {
    const moviesData = sessionStorage.getItem("moviesData");
    let movieArray = [];
  
    if (moviesData) {
      movieArray = JSON.parse(moviesData);
      console.log(movieArray);
    }
  
    const updatedMovieArray = movieArray.filter(
      (movie) => movie.id !== clickedMovie.id
    );
  
    const updatedMovieJson = JSON.stringify(updatedMovieArray);
    sessionStorage.setItem("moviesData", updatedMovieJson);
  };
 