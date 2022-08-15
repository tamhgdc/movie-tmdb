import React from "react";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import {
  useGetCreditsQuery,
  useGetDetailsQuery,
  useGetRecommendationsQuery,
  useGetSimilarQuery,
} from "../services/requestTMDbAPI";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailsBanner from "../components/DetailsBanner";
import CastList from "../components/CastList";

export default function Detailpage() {
  const { id, media_type } = useParams();

  const { data: detailsData } = useGetDetailsQuery({ id, media_type });
  const { data: recommendationsData } = useGetRecommendationsQuery({
    id,
    media_type,
  });
  const { data: similiarsData } = useGetSimilarQuery({
    id,
    media_type,
  });
  const { data: creditsData } = useGetCreditsQuery({ id, media_type });

  return (
    <>
      <Navbar />
      <section style={{ margin: "5rem 3rem 0" }}>
        <DetailsBanner data={detailsData} />
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <CastList categoryName="Cast" data={creditsData?.cast}></CastList>
      </section>
      {recommendationsData?.results?.length === 0 ? null : (
        <section style={{ margin: "5rem 3rem 0" }}>
          <MovieList
            categoryName="Recommendations"
            data={recommendationsData?.results}
          ></MovieList>
        </section>
      )}
      {similiarsData?.results?.length === 0 ? null : (
        <section style={{ margin: "3rem 3rem 0" }}>
          <MovieList
            categoryName={`Similiar ${
              media_type === "movie" ? "Movies" : "TV or Series"
            }`}
            data={similiarsData?.results}
          ></MovieList>
        </section>
      )}
      <Footer />
    </>
  );
}
