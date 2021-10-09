import React from "react";
import { useContext } from "react";
import { RoomContext } from "./Context";
import Title from "./Title";

const RoomsFilter = (props) => {
  const context = useContext(RoomContext);
  const { rooms } = context.data;
  const { updatedRooms, specificData, handleChange } = props;

  //dont want duplicate value
  const newTypeSet = new Set(rooms.map((r) => r.type));

  //change set object to array
  const newTypeArray = ["all", ...newTypeSet];

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="roomType">Room Type</label>
          <select
            name="roomType"
            id="roomType"
            value={specificData ? specificData.roomType : "none"}
            className="form-control"
            onChange={handleChange}
          >
            {newTypeArray.map((strType, index) => {
              return (
                <option key={index} value={strType}>
                  {strType}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
