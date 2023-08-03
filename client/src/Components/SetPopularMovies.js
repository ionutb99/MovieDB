import React, { useEffect, useState } from "react";
import "../Components/MoviePage.css";
import MovieItem from "./MovieItem";

export const SetPopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [showMovieDetails, setShowMovieDetails] = useState(null);

  useEffect(() => {
    const getMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=829cea18552bb0bfb393588ea1ef46e2`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results && Array.isArray(data.results)) {
            setMovies(data.results);
          } else {
            console.error("Invalid response format");
          }
        })
        .catch((err) => console.error("Error fetching: ", err));
    };
    getMovies();
  }, []);

  const getImage = async (id) => {
    try {
      const response = await fetch(`https://image.tmdb.org/t/p/w500${id}`);
      if (response.ok) {
        const imgUrl = URL.createObjectURL(await response.blob());
        return imgUrl;
      } else {
        console.error("Image not found");
        return null;
      }
    } catch (error) {
      console.error("Image not found: ", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = await Promise.all(
        movies.map((movie) => getImage(movie.backdrop_path))
      );
      setImageUrls(urls);
    };
    fetchImageUrls();
  }, [movies]);


  const handleShowMovieDetails = (index) => {
    setShowMovieDetails(index);
  };

  return (
    <>
     <MovieItem
          movies={movies}
          imageUrls={imageUrls}
          showMovieDetails={showMovieDetails}
          setShowMovieDetails={handleShowMovieDetails}
        />
    </>
  );
};
