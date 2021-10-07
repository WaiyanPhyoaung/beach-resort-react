import React from "react";
import { RoomContext } from "./Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms } = this.context;

    const featuredRoomsJsx = featuredRooms.map((room) => {
      return <Room key={room.id} featuredRooms={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featuredRoomsJsx}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
