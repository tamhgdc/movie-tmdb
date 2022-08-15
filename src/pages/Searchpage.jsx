import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGetSearchQuery } from "../services/requestTMDbAPI";
import {
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  createTheme,
  InputBase,
  Box,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Searchpage() {
  const { query } = useParams();
  const [params, setParams] = useState(query);
  const { data, isLoading } = useGetSearchQuery({ query: params });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const query = data.get("search");
    if (query !== "") setParams(query);
  };

  const handleCardClik = (mediaType, id) => {
    navigate(`/details/${mediaType}/${id}`);
  };

  return (
    <>
      <Navbar></Navbar>
      <section style={{ margin: "6rem 3rem 0" }}>
        <div style={{width: "20rem"}}>
          <Box component="form" onSubmit={handleSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{
                  "aria-label": "search",
                  style: { fontSize: 15.5 },
                }}
                name="search"
              />
            </Search>
          </Box>
        </div>
        <Typography my="2rem" variant="h6" color="white">
          Search results from "{params}" query{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            rowGap: 3,
          }}
        >
          {!isLoading
            ? data?.results.map((data, id) =>
                data?.poster_path ? (
                  <ThemeProvider theme={darkTheme}>
                    <Card
                      key={id}
                      sx={{ maxWidth: 165, maxHeight: 300, borderRadius: 0 }}
                    >
                      <CardActionArea
                        sx={{
                          ":hover": {
                            opacity: 0.9,
                          },
                        }}
                        onClick={() =>
                          data?.first_air_date
                            ? handleCardClik("tv", data?.id)
                            : handleCardClik("movie", data?.id)
                        }
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image={`https://image.tmdb.org/t/p/w500/${data?.poster_path?.replace(
                            "/",
                            ""
                          )}`}
                          alt={data?.original_name || data?.original_title}
                        />
                      </CardActionArea>
                      <Typography
                        fontSize={"0.8rem"}
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          padding: "8px 10px 8px",
                          textTransform: "uppercase",
                        }}
                      >
                        {data?.media_type}
                      </Typography>
                    </Card>
                  </ThemeProvider>
                ) : null
              )
            : null}
        </Box>
      </section>
      <Footer></Footer>
    </>
  );
}
