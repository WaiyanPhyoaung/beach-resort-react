import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { title, subtitle, children } = props;
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
