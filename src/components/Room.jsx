import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../images/room-1.jpeg";

const Room = (props) => {
  const { name, slug, images, price } = props.featuredRooms;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="Single Room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per Night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;
