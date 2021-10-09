import React from "react";
import data from "../data";

export const RoomContext = React.createContext();

class RoomProvider extends React.Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };
  componentDidMount() {
    const rooms = this.formatData(data);
    const featuredRooms = rooms.filter((room) => room.featured);
    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }
  formatData(items) {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      // item.fields copy, override images and add id properties...new object
      const rooms = { ...item.fields, images: images, id: id };
      return rooms;
    });
    return tempItems;
  }

  getRoomBySlug = (slug) => {
    return this.state.rooms.find((r) => r.slug === slug);
  };

  render() {
    return (
      <RoomContext.Provider
        value={{ data: this.state, getRoomBySlug: this.getRoomBySlug }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export default RoomProvider;
