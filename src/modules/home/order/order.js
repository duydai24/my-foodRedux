import react from "react";

function Order() {
  return (
    <div className="py-24 z-20 overflow-hidden">
      <div className="container">
        <div className="text-center">
          <p className="text-[#fbb403] font-bold text-3xl">Order Now!</p>
          <p className="text-black font-bold text-4xl mt-5">
            Mechanism of action
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 animate-bounceInRight lg:flex lg:flex-row items-center md:justify-items-center lg:justify-between mt-16">
          <OrderItem
            img={"oder1.jpg"}
            lable={"01 STEP"}
            text={"Choose Your Favorite"}
          />
          <img
            className="hidden lg:block w-20 h-5 mb-10"
            src="arrow1Oder.png"
          />
          <OrderItem
            img={"oder2.jpg"}
            lable={"02 STEP"}
            text={"We Deliver Your Meals"}
          />
          <img
            className="hidden lg:block w-20 h-5 mb-10"
            src="arrow2Oder.png"
          />
          <OrderItem
            img={"oder3.jpg"}
            lable={"03 STEP"}
            text={"Cash on Delivery"}
          />
          <img
            className="hidden lg:block w-20 h-5 mb-10"
            src="arrow1Oder.png"
          />
          <OrderItem
            img={"oder4.jpg"}
            lable={"04 STEP"}
            text={"Eat And Enjoy"}
          />
        </div>
      </div>
    </div>
  );
}

function OrderItem({ img, text, lable }) {
  return (
    <div className="OrderItem">
      <div className="relative">
        <img
          className="border-[15px] shadow-xl border-white rounded-full"
          src={img}
        />
        <span className="bg-[#ff514e] text-center text-white shadow-xl rounded-full w-14 h-14 absolute -top-1 right-3 text-[12px] border-8 border-white lableOder">
          {lable}
        </span>
      </div>
      <p className="text-black text-[20px] font-semibold mt-5 md:mt-10 text-center textOder">
        {text}
      </p>
    </div>
  );
}

export default Order;
