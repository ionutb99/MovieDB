import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

export const SetPopularSeries = () => {
  const [series, setSeries] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [showSeriesDetails, setShowSeriesDetails] = useState(null);

  useEffect(() => {
    const getSeries = () => {
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=829cea18552bb0bfb393588ea1ef46e2`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results && Array.isArray(data.results)) {
            setSeries(data.results);
          } else {
            console.error("Invalid response format");
          }
        })
        .catch((err) => console.error("Error fetching: ", err));
    };
    getSeries();
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
        series.map((seriesItem) => getImage(seriesItem.backdrop_path || seriesItem.poster_path))
      );
      setImageUrls(urls);
    };
    fetchImageUrls();
  }, [series]);

  const handleShowSeriesDetails = (index) => {
    setShowSeriesDetails(index);
  };

  return (
    <>
      <MovieItem
        movies={series}
        imageUrls={imageUrls}
        showMovieDetails={showSeriesDetails}
        setShowMovieDetails={handleShowSeriesDetails}
      />
    </>
  );
};
