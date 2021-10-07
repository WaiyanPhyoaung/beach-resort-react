import React from "react";
import data from "../data";

export const RoomContext = React.createContext();

class RoomProvider extends React.Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
  };
  componentDidMount() {
    console.log(data);
    const rooms = this.formatData(data);
    const featuredRooms = rooms.filter((room) => room.featured);
    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: this.state.loading,
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

  render() {
    return (
      <RoomContext.Provider value={this.state}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export default RoomProvider;
