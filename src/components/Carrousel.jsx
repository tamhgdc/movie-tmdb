import React from "react";
import Carousel from "react-material-ui-carousel";

export default function Carrousel({ children }) {
  return (
    <Carousel
      sx={{ height: "80vh" }}
      IndicatorIcon={false}
      stopAutoPlayOnHover={false}
      interval={4000}
    >
      {children}
    </Carousel>
  );
}
