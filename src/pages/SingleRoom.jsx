import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { RoomContext } from "../components/Context";

import Banner from "../components/Banner";
import { StyledSingleRoom } from "../components/StyledHero";

// class SingleRoom extends React.Component {
//   static contextType = RoomContext;

//   state = {
//     slug: this.props.match.params.slug,
//     room: {},
//   };

//   componentDidMount() {
//     const room = this.context.getRoomBySlug(this.state.slug);

//     this.setState((prevState) => {
//       console.log("Setting State");
//       const newState = { ...prevState, room: room };

//       return newState;
//     });
//   }

//   render() {
//     console.log("Rendering State");
//     const context = this.context;
//     console.log(context);
//     const r = this.state.room;
//     return <div>{r ? r.name : "nothing"}</div>;
//   }
// }

// export default SingleRoom;

const SingleRoom = () => {
  const context = useContext(RoomContext);
  const { slug } = useParams();

  let [room, setRoom] = useState();

  useEffect(() => {
    const room = context.getRoomBySlug(slug);
    setRoom(room);
  }, [slug, context]);

  if (!room) {
    return (
      <div className="error">
        <h3>No Such Room Could Be Found!</h3>
        <Link to="/rooms" className="btn-primary">
          Back To Rooms
        </Link>
      </div>
    );
  }
  //this is speration of main image and others (destruct)
  const [mainImg, ...others] = room.images;
  return (
    <>
      <StyledSingleRoom img={mainImg}>
        <Banner title={`${room.name} rooms`}>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </Banner>
      </StyledSingleRoom>
      <section className="single-room">
        <div className="single-room-images">
          {others.map((image, index) => {
            return <img key={index} src={image} alt="" />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{room.description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price : ${room.price}</h6>
            <h6>size : {room.size} SQFT</h6>
            <h6>
              Max Capacity :{" "}
              {room.capacity > 1
                ? `${room.capacity} people`
                : `${room.capacity} person`}
            </h6>
            <h6>{room.pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
            <h6>{room.breakfast && "Breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {room.extras.map((extra, index) => {
            return <li key={index}>-{extra}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
