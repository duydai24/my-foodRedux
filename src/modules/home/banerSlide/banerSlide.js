import react from "react";
import Slider from "react-slick";
import ButtonOderNow from "../../../lib/buttonOderNow/buttonOderNow";

function BannerSlide() {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="z-20 relative">
      <Slider {...settings}>
        <SlideHomeItem img={"bgHome.jpg"} />
        <SlideHomeItem img={"bg2Home.jpg"} />
        <SlideHomeItem img={"bg3Home.jpg"} />
      </Slider>
      <div className="container">
      <div className="flex flex-col items-start absolute top-[30%] max-w-4xl">
        <p className="uppercase text-white font-bold text-lg">
          ENJOY YOUR MEAL
        </p>
        <p className="font-bold text-8xl text-white py-10">
          Good food is wise{" "}
          <span className="font-bold text-8xl text-red-redd">
            {" "}
            medicine
          </span>
        </p>
        <ButtonOderNow/>
        </div>
      </div>
    </div>
  );
}

function SlideHomeItem({ img }) {
  return (
    <div>
      <img className="w-screen h-[17rem] md:h-[35rem] lg:h-[50rem]" src={img} />
    </div>
  );
}
export default BannerSlide;
