import react from "react";
import ButtonOderNow from '../../../lib/buttonOderNow/buttonOderNow';


function Delivery() {
  return (
    <div className="container flex justify-between z-20">
      <div className="w-2/5">
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
          <ButtonOderNow />
        </div>
      </div>
      <div className="w-3/5">
        <img className="h-3/4 w-3/4 ml-44" src="bgDelivery.png" />
      </div>
    </div>
  );
}
export default Delivery;
