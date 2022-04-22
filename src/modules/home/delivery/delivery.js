import react from "react";
import ButtonOderNow from "../../../lib/buttonOderNow/buttonOderNow";

function Delivery() {
  return (
    <div className="container md:flex justify-between z-20 pb-20">
      <div className="px-5 md:w-2/5 animate-bounceInLeft">
        <p className="text-[#fbb403] font-bold text-3xl">Delivery</p>
        <p className="text-black font-bold text-4xl mt-3">
          A Moments Of Delivered
          <span className="text-[#ff514e]"> On Right Time & Place</span>
        </p>
        <p className="text-base mt-3">
          Food G is a restaurant, bar and coffee roastery located on a busy
          corner site in Farringdon's Exmouth Market. With glazed frontage on
          two sides of the building, overlooking the market and a bustling
          London inteon.
        </p>
        <div className="flex mt-10 items-center">
          <img className="w-32" src="shiperDelivery.png" />
          <div className="ml-3 mr-10">
            <p className="">Delivery Order Num</p>
            <span className="text-[#ff514e] font-bold">0964247999</span>
          </div>
          <div className="hidden lg:block">
            <ButtonOderNow />
          </div>
        </div>
      </div>
      <div className="hidden md:block w-3/5 animate-bounceInRight">
        <img className="h-3/4 w-3/4 lg:ml-44 md:ml-24" src="bgDelivery.png" />
      </div>
    </div>
  );
}
export default Delivery;
