import React from "react";
import CastCard from "../components/CastCard";
import Carousel from "react-multi-carousel";
import { Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

export default function CastList({ data, categoryName }) {
  return (
    <>
      <Typography
        variant="h6"
        color="white"
        sx={{ fontWeight: "500", marginBottom: "1rem" }}
      >
        {categoryName}
      </Typography>
      {data ? (
        <Carousel
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1400,
              },
              items: 8.5,
            },
            laptop: {
              breakpoint: {
                max: 1400,
                min: 1200,
              },
              items: 6.5,
            },
            notebook: {
              breakpoint: {
                max: 1200,
                min: 1024,
              },
              items: 5.5,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 4.5,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          showDots={false}
        >
          {data
            ?.slice(0, 21)
            .map((data, i) =>
              data.profile_path ? (
                <CastCard key={i} data={data}></CastCard>
              ) : null
            )}
        </Carousel>
      ) : null}
      <hr
        style={{
          marginTop: "2rem",
          height: "1px",
          borderWidth: 0,
          color: "gray",
          backgroundColor: "gray",
        }}
      />
    </>
  );
}
