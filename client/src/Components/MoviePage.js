import React, { useEffect, useState } from "react";
import "./MoviePage.css";
import SortingBar from "./SortingBar";
import MovieItem from "./MovieItem";

export const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [sortedClicked, setSortedCicked] = useState(false);
  const [sortingCriterion, setSortingCriterion] = useState("");
  const [sortRequired, setSortRequired] = useState(false);
  const [showMovieDetails, setShowMovieDetails] = useState(null);

  const handleSortedByBarClick = () => {
    setSortedCicked((prevState) => !prevState);
    setSortRequired(true);
  };

  useEffect(() => {
    const getMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/list/6?api_key=829cea18552bb0bfb393588ea1ef46e2`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.items && Array.isArray(data.items)) {
            setMovies(data.items);
            console.log(movies)
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

  // Function to handle the sorting based on the selected criterion
  useEffect(() => {
    const sortMovies = () => {
      if (sortRequired  && sortingCriterion) {
        const sortedMovies = [...movies].sort((a, b) => {
        
          if (sortingCriterion === "Average Vote") {
            return b.vote_average - a.vote_average; 
          }
        
        });

        setMovies(sortedMovies);
        setSortRequired(false);
      }
    };

    sortMovies();
  }, [sortingCriterion, movies]);

  const handleAllClick = () => {
    setSortingCriterion(""); 
    
    fetch(
      `https://api.themoviedb.org/3/list/6?api_key=829cea18552bb0bfb393588ea1ef46e2`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setMovies(data.items);
          if (sortingCriterion === "Average Vote") {
            setSortRequired(true);
          }
        } else {
          console.error("Invalid response format");
        }
      })
      .catch((err) => console.error("Error fetching: ", err));
  };

  return (
    <>
       <SortingBar
        sortedClicked={sortedClicked}
        handleSortedByBarClick={handleSortedByBarClick}
        handleAllClick={handleAllClick}
        setSortingCriterion={setSortingCriterion}
      />
      <div className="allMoviesDiv">
        <MovieItem
          movies={movies}
          imageUrls={imageUrls}
          showMovieDetails={showMovieDetails}
          setShowMovieDetails={setShowMovieDetails}
        />
      </div>
    </>
  );
};
