import React, { useCallback } from "react";
import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { RoomContext } from "./Context";
import Loading from "./Loading";
import RoomLists from "./RoomLists";
import RoomsFilter from "./RoomsFilter";

const RoomsContainer = () => {
  const context = useContext(RoomContext);
  const { loading, sortedRooms } = context.data;

  const [roomData, setRoomData] = useState([]);
  const [specificData, setSpecificData] = useState({});

  const getSpecificData = () => {
    const priceArr = sortedRooms.map((r) => r.price);
    const maxPrice = Math.max(...priceArr);

    const sizeArr = sortedRooms.map((r) => r.size);
    const maxSize = Math.max(...sizeArr);

    setSpecificData({
      roomType: "all",
      breakfast: false,
      capacity: 0,
      minSize: 0,
      minPrize: 0,
      breakfast: false,
      pets: false,
      maxSize: maxSize,
      maxPrice: maxPrice,
    });
  };

  useEffect(() => {
    getSpecificData();
    setRoomData([...sortedRooms]);
  }, [sortedRooms]);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    const valueOrChecked = type === "checkbox" ? checked : value;

    setSpecificData({
      ...specificData,
      [name]: valueOrChecked,
    });
  };

  useEffect(() => {
    if (specificData.roomType !== "all") {
      const newUpdatRooms = sortedRooms.filter(
        (r) => r.type === specificData.roomType
      );
      setRoomData(newUpdatRooms);
    } else {
      setRoomData(sortedRooms);
    }
  }, [specificData]);

  if (loading) return <Loading />;
  return (
    <div>
      Hello
      <RoomsFilter
        updatedRooms={roomData}
        specificData={specificData}
        handleChange={handleChange}
      />
      <RoomLists updatedRooms={roomData} />
    </div>
  );
};

export default RoomsContainer;
