import react, { useState } from "react";
import { FaPlay } from "react-icons/fa";

function SanwichVideo() {
  const [openYoutube, setonOpenYoutube] = useState(false);
  const onOpenYoutubeClass = () => {
    setonOpenYoutube(!openYoutube);
  };

  const _open = openYoutube ? "openYoutube" : "";

  return (
    <div
      className="bg-[url('/bgVideoSanwich.webp')] bg-cover flex min-h-[30rem] bg-fixed overflow-hidden "
      onClick={onOpenYoutubeClass}
    >
      <div className="flex flex-grow flex-shrink basis-0 items-center justify-center">
        <div className="relative top-0 left-0 sandwichHover">
          <div className="bg-white p-12 relative bottom-0-0 left-0 text-center sandwichVideo z-10">
            <p className="text-[#808080] text-2xl pSandwich">SandWich</p>
            <span className="font-bold text-black text-7xl pSandwich">$24</span>
          </div>
          <div
            onClick={onOpenYoutubeClass}
            className={
              "absolute bottom-0 right-10 bg-[#ff514e] rounded-full p-3 playerSandwich z-20 animate-pulse" +
              _open
            }
          >
            <span className="text-white text-xl">
              <FaPlay />
            </span>
          </div>
          <span className="w-24 h-24 top-[10%] right-[20%] gooey gooey1"></span>
          <span className="w-16 h-16 bottom-[10%] left-[10%] gooey gooey2"></span>
          <span className="w-20 h-20 top-[10%] left-[0] gooey gooey3"></span>
          <div
            className={"absolute -bottom-10 -left-36 z-30 hidden " + _open}
            onClick={onOpenYoutubeClass}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/exeuLwv57nU"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowFullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SanwichVideo;
