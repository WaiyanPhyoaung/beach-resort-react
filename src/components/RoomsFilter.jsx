import React from "react";
import { useContext } from "react";
import { RoomContext } from "./Context";
import Title from "./Title";

const RoomsFilter = (props) => {
  const context = useContext(RoomContext);
  const { rooms } = context.data;

  const { specificData, handleChange } = props;

  // r.name sames as r['name']
  const getUnique = (name) => {
    const set = new Set(rooms.map((r) => r[name]));
    //change set object to array
    return [...set];
  };
  //dont want duplicate value
  const newTypeArray = getUnique("type");
  newTypeArray.unshift("all");

  // const newTypeArray = ["all", ...newTypeSet];
  const newCapacityArr = getUnique("capacity");

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
        {/* start guest select */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={specificData ? specificData.capacity : 0}
            className="form-control"
            onChange={handleChange}
          >
            {newCapacityArr.map((cap, index) => {
              return (
                <option key={index} value={cap}>
                  {cap}
                </option>
              );
            })}
          </select>
        </div>
        {/* end guest select */}
        {/* start price */}
        <div className="form-group">
          <label htmlFor="price">Room Price : ${specificData.price}</label>
          <input
            className="form-control"
            type="range"
            name="price"
            id="price"
            value={specificData.price}
            min={specificData.minPrice}
            max={specificData.maxPrice}
            onChange={handleChange}
          />
        </div>
        {/* ends price */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={specificData.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={specificData.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
