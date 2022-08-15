import React from "react";
import Carrousel from "../components/Carrousel";
import HeroBanner from "../components/HeroBanner";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  useGetLatestQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetUpcomingQuery,
} from "../services/requestTMDbAPI";
import { Typography } from "@mui/material";

export default function Moviespage() {
  const { data: trendingAllsData } = useGetTrendingQuery({
    media_type: "movie",
  });
  const { data: latestMoviesData } = useGetLatestQuery({
    media_type: "movie",
  });
  const { data: popularMoviesData } = useGetPopularQuery({
    media_type: "movie",
  });
  const { data: topRatedMoviesData } = useGetTopRatedQuery({
    media_type: "movie",
  });
  const { data: upcomingMoviesData } = useGetUpcomingQuery({
    media_type: "movie",
  });

  return (
    <>
      <Navbar></Navbar>
      <section style={{ margin: "5rem 3rem 0" }}>
        <Typography
          variant="h4"
          color="white"
          sx={{ fontWeight: "500", mb: "1rem" }}
        >
          Movies
        </Typography>
        <Carrousel>
          {trendingAllsData?.results?.map((data, i) => (
            <HeroBanner key={i} data={data} />
          ))}
        </Carrousel>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Popular"
          data={popularMoviesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Top Rated"
          data={topRatedMoviesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Latest"
          data={latestMoviesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Upcoming"
          data={upcomingMoviesData?.results}
        ></MovieList>
      </section>
      <Footer></Footer>
    </>
  );
}
