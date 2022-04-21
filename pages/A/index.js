// import React from "react";
// import { useSelector } from "react-redux";

// function A() {
//   const { db } = useSelector((state) => state);
//   const { dbItem } = useSelector((state) => state.db);

//   //   let new_dbItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//   let new_dbItem = [];
//   dbItem.forEach((e) => {
//     if (
//       new_dbItem.every(
//         (x) => new Date(x).getMonth() != new Date(e.summary).getMonth()
//       )
//     ) {
//       new_dbItem.push(e.summary);
//     }
//   });
//   const dbFOr = [];
//   for (let index = 0; index < new_dbItem.length; index++) {
//     const elementAr = new_dbItem[index];
//     const getData = dbItem.filter(
//       (x) => new Date(x.summary).getMonth() === new Date(elementAr).getMonth()
//     );
//     dbFOr.push({ month: elementAr, data: getData });
//   }

//   let dataItem;

//   console.log("dbFOr", dbFOr);
//   return (
//     <div className="container py-48 text">
//       {dbFOr.map((value, key) => {
//         dataItem = value.data;
//         return (
//           <div>
//             <p className="bg-blue-900 pl-5 py-2 text-white">{value.month}</p>
//             {dataItem.map((val, key) => (
//               <B
//                 key={key}
//                 id={key}
//                 summary={val.summary}
//                 nameStadium={val.extra.nameStadium}
//                 teamOne={val.extra.teamOne}
//                 score={val.extra.score}
//                 teamTwo={val.extra.teamTwo}
//               />
//             ))}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// function B({
//   key,
//   month,
//   score,
//   imgLeague,
//   summary,
//   nameStadium,
//   teamOne,
//   logoTeamOne,
//   teamTwo,
//   logoTeamTwo,
// }) {
//   return (
//     <div id={key}>
//       <div className="flex justify-between items-center py-5">
//         <img src="https://slna-cdn.codervn.club/data/db31/2022/2/18/75.png" width={50} height={50} />
//         <div className="text-center">
//           <p className="font-bold">{summary}</p>
//           <p>{nameStadium}</p>
//         </div>
//         <div className="flex">
//           <span className="text-black">{teamOne}</span>
//           <img src={logoTeamOne} />
//           <span className="bg-blue-900  pl-2 w-10 h-7 text-yellow-400">
//             {score}
//           </span>
//           <img src={logoTeamTwo} />
//           <span>{teamTwo}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default A;
