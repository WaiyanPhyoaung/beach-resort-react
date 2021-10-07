import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <section className="loading">
      <h4>Rooms Data Loading...</h4>
      <img src={loadingGif} alt="" width="5%" />
    </section>
  );
};

export default Loading;
