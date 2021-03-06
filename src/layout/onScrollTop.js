/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";

function OnscrollTop({ children }) {
  const [stickyDown, setStickyDown] = useState(false);
  const [stickyUp, setStickyUp] = useState(false);

  const [pageoffset, setPageoffset] = useState(0);

  let prevScrolls;
  useEffect(() => {
    prevScrolls = window.pageYOffset;
    window.onscroll = () => {
      let currentScrolls = window.pageYOffset;
      if ((prevScrolls > currentScrolls) | (prevScrolls === currentScrolls)) {
        setStickyDown(false);
        setStickyUp(false);
      } else {
        setStickyDown(true);
        setStickyUp(true);
      }
      setPageoffset(prevScrolls);
    };
  }, [pageoffset]);
  const handleOnTop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const _stickyDown = stickyDown ? "onTop" : "";
  const _stickyUp = stickyUp ? "onTop" : "";

  return (
    <div>
      <ToastContainer />
      <main>{children}</main>
      <button
        onClick={() => handleOnTop()}
        className={
          "text-red-redd text-4xl fixed bottom-20 right-5 hidden text-center " +
          _stickyDown
        }
      >
        <BsArrowUpCircleFill />
      </button>
    </div>
  );
}
export default OnscrollTop;
