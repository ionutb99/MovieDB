import React, { useEffect, useState } from "react";
import MovieItem from "../Components/MovieItem";
import { NavbarPage } from "./Navbar/NavbarPage";

export const FavoritesPage = ({ favorites }) => {
  const [showMovieDetails, setShowMovieDetails] = useState(null); 
  const [imageUrls, setImageUrls] = useState([]); 

  useEffect(() => {
    const getImageUrls = async () => {
      const urls = await Promise.all(
        favorites.map((movie) => getImage(movie.backdrop_path))
      );
      setImageUrls(urls);
    };
    getImageUrls();
    
  }, [favorites]);

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
console.log(favorites.length === 0)
  return (
    <>
    <NavbarPage />
      <div className="favoritePagesDiv">Favorites Movies and TV Series</div>
      {favorites.length === 0 ? (<h2>No Movies Here xD</h2> ) : (<div className="allMoviesDiv">
        <MovieItem
          movies={favorites} 
          imageUrls={imageUrls} 
          showMovieDetails={showMovieDetails} 
          setShowMovieDetails={setShowMovieDetails} 
          showDeleteIcon={true}
        />
        
      </div> )}
    </>
  );
};
