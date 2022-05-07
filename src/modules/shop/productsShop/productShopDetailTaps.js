import react from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function ProductsShopDetailTaps() {
  return (
    <div className="">
      <Tabs>
        <TabList className="flex justify-center">
          <Tab>
            <a className="text-white font-bold text-3xl bg-red-redd p-2 rounded-lg">
              Description
            </a>
          </Tab>
        </TabList>

        <TabPanel className="mt-10 h-[30%] px-5">
          <h2>
            Although the legendary Double Burger really needs no introduction,
            please allow us… Tucked in between three soft buns are two all-beef
            patties, cheddar cheese, ketchup, onion, pickles and iceberg
            lettuce. Hesburger’s own paprika and cucumber mayonnaise add the
            crowning touch. Oh baby!
          </h2>
          <div className="flex justify-around">
            <DescriptionTaps
              number={"24"}
              lable={"28 cm size"}
              text={"Milk Protein"}
            />
            <DescriptionTaps
              number={"24"}
              lable={"28 cm size"}
              text={"Milk Protein"}
            />
            <DescriptionTaps
              number={"24"}
              lable={"28 cm size"}
              text={"Milk Protein"}
            />
            <DescriptionTaps
              number={"24"}
              lable={"28 cm size"}
              text={"Milk Protein"}
            />
            <DescriptionTaps
              number={"24"}
              lable={"28 cm size"}
              text={"Milk Protein"}
            />
            <DescriptionTaps
              number={"24"}
              lable={"28 cm size"}
              text={"Milk Protein"}
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

function DescriptionTaps({ number, lable, text }) {
  return (
    <div className="flex flex-col items-center my-10">
      <a className="font-bold text-3xl">{number}</a>
      <a className="border-b-[1px] border-black">{lable}</a>
      <a className="mt-5">{text}</a>
    </div>
  );
}

export default ProductsShopDetailTaps;
