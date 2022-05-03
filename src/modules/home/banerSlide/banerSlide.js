import react from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import ButtonOderNow from "../../../lib/buttonOderNow/buttonOderNow";

function BannerSlide() {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 6000,
    speed: 6000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const { banerSlide } = useSelector((state) => state.db);
  const { textSlide } = useSelector((state) => state.db);

  return (
    <div className="z-20 relative">
      <Slider {...settings}>
        {banerSlide.map((value, key) => (
          <SlideHomeItem key={key} img={value.image} />
        ))}
      </Slider>
      <span className="w-screen h-[17rem] md:h-[35rem] lg:h-[50rem] bg-slate-200 opacity-20 absolute top-0 right-0" />
      <div className="container lg:block hidden">
        {textSlide.map((value, key) => (
          <div
            key={key}
            className="flex flex-col lg:items-start md:items-center items-center absolute top-[30%] max-w-4xl overflow-hidden"
          >
            <p className="uppercase text-white font-bold text-lg animate-bounceInRight">
              {value.lable}
            </p>
            <p className="font-bold animate-bounceInLeft lg:text-8xl md:text-4xl text-xl text-white py-10">
              {value.text1}
              <span className="font-bold animate-bounceInRight lg:text-8xl md:text-4xl text-xl text-red-redd">
                {value.text2}
              </span>
            </p>
            <div className="animate-bounceInRight">
              <ButtonOderNow />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideHomeItem({ img, key }) {
  return (
    <img
      key={key}
      className="w-screen h-[17rem] md:h-[35rem] lg:h-[50rem]"
      src={img}
    />
  );
}
export default BannerSlide;
