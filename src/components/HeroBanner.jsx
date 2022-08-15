import React from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import genres from "../json/genre.json";
import { useNavigate } from "react-router-dom";

export default function HeroBanner({ data }) {
  const navigate = useNavigate();
  return (
    <Box alt="poster" sx={{ display: "flex", height: "80vh" }}>
      <Box
        sx={{
          width: "30%",
          padding: "3rem 2rem",
          backgroundColor: "#091E3A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            color="white"
            sx={{
              fontWeight: "700",
              fontSize: "3rem",
              lineHeight: "3.5rem",
              marginBottom: "1rem",
            }}
          >
            {data?.title || data?.name}
          </Typography>
          <Typography variant="caption" color="white">
            {data?.genre_ids?.map((id, i) =>
              genres.map((genre) =>
                genre.id === id ? ` | ${genre.name}` : null
              )
            )}
          </Typography>
          <Typography color="yellow" sx={{ textTransform: "capitalize" }}>
            {data?.media_type}
          </Typography>
          <Rating
            defaultValue={data?.vote_average / 2}
            readOnly
            precision={0.5}
            size="small"
          />
          <Typography
            variant="body2"
            color={"white"}
            sx={{ marginTop: "2rem" }}
          >
            {data?.overview}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "0",
              borderColor: "white",
              color: "white",
              marginRight: "1rem",
              paddingX: "3rem",
            }}
            onClick={() => navigate(`/details/${data?.media_type}/${data?.id}`)}
          >
            Watch Trailer
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "70%",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, #091E3A 8.65%, rgba(9, 30, 58, 0.7) 21.88%, rgba(9, 30, 58, 0.5) 35.73%, rgba(9, 30, 58, 0.25) 56.56%, rgba(9, 30, 58, 0.22) 100%)",
          }}
        ></div>
      </Box>
    </Box>
  );
}
