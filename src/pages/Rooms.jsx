import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms" subtitle="Book in advance and save 10%!">
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
