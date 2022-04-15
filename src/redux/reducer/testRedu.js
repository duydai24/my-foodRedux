import * as types from "../types";
export const initialState = {
    dbItem: [
        {
          images: [],
          tags: [
            {
              label: "Cúp Quốc gia 2022",
              postId: 2101,
              tagId: 75,
            },
          ],
          imageN: {
            path: "/data/db60/2022/4/1/2105_m",
            ext: "png",
          },
          postCounted: 0,
          id: 2101,
          sk: "vong loai cup quoc gia 2022 slna vs binh phuoc",
          code: "vong-loai-cup-quoc-gia-2022-2101",
          label: "Vòng loại Cúp quốc gia 2022 ",
          link: null,
          video: null,
          image: "/data/db60/2022/4/1/2105_m.png",
          mobile: "/data/db60/2022/4/1/2108_m.png",
          content: null,
          summary: "2022/04/07-17:00",
          lastModify: "2022-04-14T16:59:53.8933333",
          deleted: false,
          isActive: true,
          ord: 1,
          parentId: null,
          type: 55,
          extra:
            {score:"1-2",stadium:1159,isComing:true,isChange:true,isAnotheryard:true,nameStadium:"Thiên Trường ",imageTournament:"/data/db31/2022/2/18/75.png",team1Id:2105,teamOne:"Becamex Bình Dương",teamTwo:"Hải Phòng",team2Id:2108},
        },
        {
          images: [],
          tags: [
            {
              label: "Cúp Quốc gia 2022",
              postId: 1106,
              tagId: 75,
            },
          ],
          imageN: {
            path: "/data/db60/2022/4/1/2109_m",
            ext: "png",
          },
          postCounted: 0,
          id: 1106,
          sk: "v4 v league 2022 sgfc vs slnafc",
          code: "v4-vleague-2022-sgfc-vs-slnafc-1106",
          label: "V4 V.League 2022 SGFC vs SLNAFC",
          link: null,
          video: null,
          image: "/data/db60/2022/4/1/2109_m.png",
          mobile: "/data/db60/2022/4/1/1165_m.png",
          content: null,
          summary: "2022/04/07-19:00",
          lastModify: "2022-04-14T12:50:40.29",
          deleted: false,
          isActive: true,
          ord: 2,
          parentId: null,
          type: 55,
          extra:
            {score:"1-1",stadium:1158,isChange:true,isComing:true,isAnotheryard:false,nameStadium:"Pleiku ",imageTournament:"/data/db31/2022/2/18/75.png",team1Id:2109,team2Id:1165,teamOne:"Hoàng Anh Gia Lai",teamTwo:"Sông Lam Nghệ An"},
        },
        {
          images: [],
          tags: [
            {
              label: "Cúp Quốc gia 2022",
              postId: 1092,
              tagId: 75,
            },
          ],
          imageN: {
            path: "/data/db60/2022/4/1/1165",
            ext: "png",
          },
          postCounted: 0,
          id: 1092,
          sk: "tran binh duong slna 21",
          code: "v3-vleague-2022-slna-vs-hagl-1092",
          label: "V3 V.League 2022 SLNA vs HAGL",
          link: null,
          video: null,
          image: "/data/db60/2022/4/1/1165.png",
          mobile: "/data/db60/2022/4/1/2107_m.png",
          content: null,
          summary: "2022/04/07-21:00",
          lastModify: "2022-04-14T12:50:43.9933333",
          deleted: false,
          isActive: true,
          ord: 3,
          parentId: null,
          type: 55,
          extra:
            {score:"2-0",stadium:1156,isChange:true,isComing:true,isAnotheryard:false,nameStadium:"Hàng Đẫy",imageTournament:"/data/db31/2022/2/18/75.png",isDarkMode1:true,team1Id:1165,team2Id:2107,teamOne:"Sông Lam Nghệ An",teamTwo:"Nam Định"},
        },
        {
          images: [],
          tags: [
            {
              label: "Cúp Quốc gia 2022",
              postId: 1091,
              tagId: 75,
            },
          ],
          imageN: {
            path: "/data/db60/2022/4/1/1165_m",
            ext: "png",
          },
          postCounted: 0,
          id: 1091,
          sk: "tran binh duong ha noi 23",
          code: "v2-vleague-2022-song-lam-nghe-an-vs-binh-dinh-1091",
          label: "V2 V.League 2022 Sông Lam Nghệ An vs Bình Định",
          link: null,
          video: null,
          image: "/data/db60/2022/4/1/1165_m.png",
          mobile: "/data/db60/2022/4/1/2108_m.png",
          content: null,
          summary: "2022/04/07-23:00",
          lastModify: "2022-04-14T12:50:50.5433333",
          deleted: false,
          isActive: true,
          ord: 3,
          parentId: null,
          type: 55,
          extra:
            {score:"1-2",stadium:1156,isChange:true,isComing:true,isAnotheryard:false,nameStadium:"Hàng Đẫy",imageTournament:"/data/db31/2022/2/18/75.png",team1Id:1165,team2Id:2108,teamOne:"Sông Lam Nghệ An",teamTwo:"Hải Phòng"},
        },
        {
          images: [],
          tags: [
            {
              label: "Cúp Quốc gia 2022",
              postId: 1090,
              tagId: 75,
            },
          ],
          imageN: {
            path: "/data/db60/2022/4/1/2105_m",
            ext: "png",
          },
          postCounted: 0,
          id: 1090,
          sk: "tran binh duong ha noi 33",
          code: "v1-vleague-2022-becamex-binh-duong---song-lam-nghe-an-1090",
          label: "V1 V.League 2022 Becamex Bình Dương - Sông Lam Nghệ An",
          link: null,
          video: null,
          image: "/data/db60/2022/4/1/2105_m.png",
          mobile: "/data/db60/2022/4/1/1165.png",
          content: null,
          summary: "2022/04/07-13:00",
          lastModify: "2022-04-14T12:50:53.5933333",
          deleted: false,
          isActive: true,
          ord: 5,
          parentId: null,
          type: 55,
          extra:
            {score:"0-1",stadium:1157,isChange:true,stadum:"Sân Lạch Tray",isComing:true,isAnotheryard:false,nameStadium:"Lạch Tray",imageTournament:"/data/db31/2022/2/18/75.png",isDarkMode2:true,team1Id:2105,team2Id:1165,teamOne:"Becamex Bình Dương",teamTwo:"Sông Lam Nghệ An"},
        }
      ]
  }

  export const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_DB:
        return {
          ...state,
          db: action.payload,
        };
      default:
        return state;
    }
  };