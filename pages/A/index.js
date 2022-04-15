import React from "react";
import { useSelector } from "react-redux";

function A() {
  const { db } = useSelector((state) => state);
  const { dbItem } = useSelector((state) => state.db);
  console.log(db, "a");
  console.log(dbItem, "b");

  return (
    <div className="container py-48">
      <p className="bg-blue-700 py-3 text-white">123</p>
      <div className="flex">
        <img src={imgLeague}/>
        <div className="text-center">
          <p>{summary}</p>
          <p>{nameStadium}</p>
        </div>
        <div className="flex">
            <span>{teamOne}</span>
            <img src={logoTeamOne}/>
            <span className="bg-blue p-3 text-yellow-700">{hour}</span>
            <img src={logoTeamOne}/>
            <span>{teamOne}</span>
        </div>
      </div>
    </div>
  );
}
export default A;
