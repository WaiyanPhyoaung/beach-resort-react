import React from "react";

const Hero = (props) => {
  const { hero, children } = props;
  return <div className={hero}>{children}</div>;
};

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
