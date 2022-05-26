import react from "react";
import Slider from "react-slick";

function FeedBack() {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 6000,
    speed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="container overflow-hidden">
      <div className="my-20 px-5 z-7">
        <Slider {...settings}>
          <FeedBackSlide
            img={"userDai.webp"}
            name={"Duy Đại"}
            title={"Developer"}
            text={
              "I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality"
            }
          />
          <FeedBackSlide
            img={"linh.jpg"}
            name={"Linh Nhi"}
            title={"Ofice staff"}
            text={
              "I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality"
            }
          />
          <FeedBackSlide
            img={"son.webp"}
            name={"Trọng Sơn"}
            title={"Design"}
            text={
              "I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality"
            }
          />
        </Slider>
      </div>
    </div>
  );
}

function FeedBackSlide({ img, name, title, text }) {
  return (
    <div className="flex flex-col items-center relative pt-6">
      <span className="w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[15rem] lg:h-[15rem] bg-[#fbb403] spanFeedback" />
      <img
        alt="img"
        className="w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[15rem] lg:h-[15rem] absolute imgFeedback"
        src={img}
      />
      <p className="uppercase text-black font-bold text-xl md:text-3xl my-5">
        {name}
      </p>
      <p className="text-gray-600 md:text-xl mb-5">{title}</p>
      <p className="text-sm md:text-xl text-center">{text}</p>
    </div>
  );
}
export default FeedBack;
