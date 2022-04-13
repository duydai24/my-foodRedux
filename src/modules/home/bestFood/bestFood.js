import react from "react";
import ButtonOderNow from '../../../lib/buttonOderNow/buttonOderNow';

function BestFood() {
  return (
    <div className="pb-24 z-20">
      <div className="bg-[url('/bgBestFood.jpg')] bg-cover">
        <div className="flex justify-between">
          <div className="ml-2 md:ml-10">
            <BestFoodItems
              number={"01"}
              lable={"Mild Butter"}
              text={
                "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce"
              }
            />
            <div className="ml-2 md:ml-10">
              <BestFoodItems
                number={"01"}
                lable={"Mild Butter"}
                text={
                  "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce"
                }
              />
            </div>
            <BestFoodItems
              number={"01"}
              lable={"Mild Butter"}
              text={
                "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce"
              }
            />
          </div>
          <div className="mr-2 md:mr-10">
            <BestFoodItems
              number={"01"}
              lable={"Mild Butter"}
              text={
                "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce"
              }
            />
            <div className="ml-2 md:ml-10">
              <BestFoodItems
                number={"01"}
                lable={"Mild Butter"}
                text={
                  "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce"
                }
              />
            </div>
            <BestFoodItems
              number={"01"}
              lable={"Mild Butter"}
              text={
                "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce"
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <p className="text-[#fbb403] font-bold text-3xl mt-5">Best Food!</p>
        <p className="text-black text-center font-bold text-4xl mt-5">
          Super delicious Steak
          <span className="text-[#ff514e]"> Hamburger</span>
        </p>
        <span className="text-[#ff514e] text-4xl font-bold my-5">$24.00</span>
        <ButtonOderNow/>
      </div>
    </div>
  );
}

function BestFoodItems({ lable, text, number }) {
  return (
    <div className="relative top-0 left-0 max-w-[400px] BestFoodItems">
      {/* <span className="bg-white font-bold text-black text-xl absolute -top-7 p-5 left-6 w-16 h-16 shadow-lg rounded-full text-center numberFoodItem">
        {number}
      </span> */}
      <div className="bg-white p-10 rounded-md my-16 BestFoodItem">
        <p className="text-black text-2xl font-bold lableBestFoodItem">
          {lable}
        </p>
        <p className="text-[#CCCCCC] text-base mt-5 textBestFoodItem">{text}</p>
      </div>
    </div>
  );
}

export default BestFood;
