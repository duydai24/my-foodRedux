import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="h-screen flex items-center m-auto relative">
      <ReactLoading
        type={"bars"}
        color={"#ff514e"}
        height={"10%"}
        width={"10%"}
        className={"loading"}
      />
    </div>
  );
}
