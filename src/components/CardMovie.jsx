import React from "react";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardMovie({ data }) {
  const navigate = useNavigate();

  const handleCardClik = (mediaType) => {
    navigate(`/details/${mediaType}/${data?.id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 200,
        borderRadius: "0",
      }}
    >
      <CardActionArea
        sx={{
          ":hover": {
            opacity: 0.9,
          },
        }}
        onClick={() =>
          data?.first_air_date ? handleCardClik("tv") : handleCardClik("movie")
        }
      >
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500/${data?.poster_path?.replace(
            "/",
            ""
          )}`}
        />
      </CardActionArea>
    </Card>
  );
}
