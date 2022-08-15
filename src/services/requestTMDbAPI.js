import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const requestTMDbAPI = createApi({
  reducerPath: "requestTMDbAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: ({media_type}) => ({
        url: `trending/${media_type}/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getPopular: builder.query({
      query: ({media_type}) => ({
        url: `${media_type}/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getUpcoming: builder.query({
      query: ({media_type}) => ({
        url: `${media_type}/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getTopRated: builder.query({
      query: ({media_type}) => ({
        url: `${media_type}/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getLatest: builder.query({
      query: ({media_type}) => ({
        url : `/discover/${media_type}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=release_date.asc&page=1&primary_release_year=2022&with_watch_monetization_types=flatrate`,
      }),
    }),
    getDetails: builder.query({
      query: ({ media_type, id }) => ({
        url: `${media_type}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getRecommendations: builder.query({
      query: ({ media_type, id }) => ({
        url: `${media_type}/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getCredits: builder.query({
      query: ({ media_type, id }) => ({
        url: `${media_type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getSimilar: builder.query({
      query: ({ media_type, id }) => ({
        url: `${media_type}/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getTvAiringToday: builder.query({
      query: () => ({
        url: `tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getTvOnTheAir: builder.query({
      query: () => ({
        url: `tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getSearch: builder.query({
      query: ({query}) => ({
        url: `search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`,
      }),
    }),
  }),
});

export const {
  useGetCreditsQuery,
  useGetDetailsQuery,
  useGetRecommendationsQuery,
  useGetSimilarQuery,
  useGetTrendingQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetPopularQuery,
  useGetLatestQuery,
  useGetTvAiringTodayQuery,
  useGetTvOnTheAirQuery,
  useGetSearchQuery
} = requestTMDbAPI;
