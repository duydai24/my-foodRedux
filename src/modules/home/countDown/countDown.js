import react, { useState } from "react";
import CountUp from "react-countup";

function CountDown() {
  return (
    <div className="bg-red-redd">
      <div className="container sm:grid md:grid-cols-2 flex flex-col lg:flex lg:flex-row lg:justify-between">
        <CountDownItems number={"350"} span={"+"} text={"Cups of Coffee"} />
        <CountDownItems number={"2678"} span={"+"} text={"Orders Everyday"} />
        <CountDownItems number={"60"} text={"Skilled Professionals"} />
        <CountDownItems number={"30"} text={"Sandwichs at Hour"} />
      </div>
    </div>
  );
}

function CountDownItems({ number, text, span }) {
  return (
    <div className="text-center py-14">
      <CountUp
        className="font-bold text-white text-5xl"
        end={number}
        duration="10"
      />
      <span className="font-bold text-white text-5xl">{span}</span>
      <p className="text-white text-xl">{text}</p>
    </div>
  );
}
export default CountDown;
