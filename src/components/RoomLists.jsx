import React from "react";
import Room from "./Room";

const RoomLists = (props) => {
  const { updatedRooms, specificData } = props;

  if (updatedRooms.length < 1)
    return (
      <div className="empty-search">
        <h3>Unfortunately no updatedRooms matched !</h3>
      </div>
    );
  return (
    <section className="roomlists">
      <div className="roomlist-center">
        {updatedRooms.map((room, index) => {
          return <Room key={index} featuredRooms={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomLists;
