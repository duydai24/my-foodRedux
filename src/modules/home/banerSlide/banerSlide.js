import react from "react";
import Slider from "react-slick";

function BannerSlide() {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed :3000,
    speed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="z-20">
      <Slider {...settings}>
        <SlideHomeItem img={'bgHome.png'}/>
        <SlideHomeItem img={'bg2Home.jpg'}/>
        <SlideHomeItem img={'bg3Home.jpg'}/>
      </Slider>
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
