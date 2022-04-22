// import React, { useState, useEffect } from "react";
// export const stickyMouse = ({ down, className }) => {
//   const [stickyDown, setStickyDown] = useState(false);

//   const [pageoffset, setPageoffset] = useState(0);

//   let prevScrolls;
//   useEffect(() => {
//     prevScrolls = window.pageYOffset;
//     window.onscroll = () => {
//       let currentScrolls = window.pageYOffset;
//       if ((prevScrolls > currentScrolls) | (prevScrolls === currentScrolls)) {
//         setStickyDown(false);
//       } else {
//         setStickyDown(true);
//       }
//       setPageoffset(prevScrolls);
//     };
//   }, [pageoffset]);

//   className = stickyDown ? { down } : "";
// };
