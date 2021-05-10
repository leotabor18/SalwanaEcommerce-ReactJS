import React from "react";
import Carousel from "../components/Carousel/Carousel_";
import Products from "../components/Products/Products";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  return (
    <>
      <Carousel />
      <Products />
      <Pagination />
      <p className="reminders">
        ***All products are belong to
        <a className="reminder-link" href="/#">
          {" "}
          OTAP Store -ANGELES CITY
        </a>
        . Prices and ratings are untrue, and they just used on this site for
        demonstration only ***
      </p>
    </>
  );
};

export default Home;
