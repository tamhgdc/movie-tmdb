import React from "react";
import Carrousel from "../components/Carrousel";
import HeroBanner from "../components/HeroBanner";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetUpcomingQuery,
} from "../services/requestTMDbAPI";

export default function Homepage() {
  const { data: trendingAllsData } = useGetTrendingQuery({ media_type: "all" });
  const { data: popularMoviesData } = useGetPopularQuery({
    media_type: "movie",
  });
  const { data: popularSeriesData } = useGetPopularQuery({ media_type: "tv" });
  const { data: upcomingMoviesData } = useGetUpcomingQuery({
    media_type: "movie",
  });
  const { data: topRatedSeriesData } = useGetTopRatedQuery({
    media_type: "tv",
  });

  return (
    <>
      <Navbar></Navbar>
      <section style={{ margin: "5rem 3rem 0" }}>
        <Carrousel>
          {trendingAllsData?.results?.map((data, i) => (
            <HeroBanner key={i} data={data} />
          ))}
        </Carrousel>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Popular Movies"
          data={popularMoviesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="TV Seasons / Series"
          data={popularSeriesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Top Rated TV Seasons / Series"
          data={topRatedSeriesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Upcoming Movies"
          data={upcomingMoviesData?.results}
        ></MovieList>
      </section>
      <Footer></Footer>
    </>
  );
}
