import React from "react";
import { useContext } from "react";
import { useCallback, useEffect, useState } from "react/cjs/react.development";
import { RoomContext } from "./Context";
import Loading from "./Loading";
import RoomLists from "./RoomLists";
import RoomsFilter from "./RoomsFilter";

const RoomsContainer = () => {
  const context = useContext(RoomContext);
  const { loading, sortedRooms } = context.data;

  const [roomData, setRoomData] = useState([]);
  const [specificData, setSpecificData] = useState({});

  //
  const getSpecificData = useCallback(() => {
    const priceArr = sortedRooms.map((r) => r.price);
    const maxPrice = Math.max(...priceArr);

    const sizeArr = sortedRooms.map((r) => r.size);
    const maxSize = Math.max(...sizeArr);

    setSpecificData({
      roomType: "all",
      capacity: 1,
      price: maxPrice,
      minSize: 0,
      minPrize: 0,
      breakfast: false,
      pets: false,
      maxSize: maxSize,
      maxPrice: maxPrice,
    });
  }, [sortedRooms]);

  useEffect(() => {
    getSpecificData();
    setRoomData([...sortedRooms]);
  }, [sortedRooms, getSpecificData]);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const valueOrChecked = type === "checkbox" ? checked : value;

    setSpecificData({
      ...specificData,
      [name]: valueOrChecked,
    });
  };

  const filterRooms = useCallback(() => {
    let newUpdateRooms = [...sortedRooms];

    //filter by type
    if (specificData.roomType !== "all") {
      newUpdateRooms = newUpdateRooms.filter(
        (r) => r.type === specificData.roomType
      );
    }
    //filter by capacity
    if (specificData.capacity !== 1) {
      specificData.capacity = parseInt(specificData.capacity);
      newUpdateRooms = newUpdateRooms.filter(
        (r) => r.capacity === specificData.capacity
      );
    }
    //filter by price
    newUpdateRooms = newUpdateRooms.filter(
      (r) => r.price <= specificData.price
    );

    if (specificData.breakfast)
      newUpdateRooms = newUpdateRooms.filter((r) => r.breakfast === true);

    if (specificData.pets)
      newUpdateRooms = newUpdateRooms.filter(
        (r) => r.pets === specificData.pets
      );

    setRoomData(newUpdateRooms);
  }, [specificData, sortedRooms]);

  useEffect(() => {
    filterRooms();
  }, [filterRooms]);

  if (loading) return <Loading />;
  return (
    <div>
      <RoomsFilter specificData={specificData} handleChange={handleChange} />
      <RoomLists updatedRooms={roomData} />
    </div>
  );
};

export default RoomsContainer;
