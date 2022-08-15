import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function MediaCard({ data }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 300, height: 310, mr: "1rem" }}>
        <CardMedia
          component="img"
          height="220"
          image={`https://image.tmdb.org/t/p/w500/${data?.profile_path?.replace(
            "/",
            ""
          )}`}
          alt={data?.original_name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            fontSize={"0.9rem"}
            component="div"
          >
            {data?.original_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.character}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
