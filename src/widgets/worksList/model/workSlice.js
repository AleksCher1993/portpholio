import { createSlice } from "@reduxjs/toolkit";
import foodsamurai from "./../../../app/assets/imgs/foodsamurai.JPG"
import winemarket from "./../../../app/assets/imgs/winemarket.png"
import friendconnect from "./../../../app/assets/imgs/friendconnect.png"

const initialState = {
  works: {
    groupone: [
      {
        id:0,
        title: "Food Samurai",
        img: foodsamurai,
        descr:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis aspernatur consequuntur sunt rem saepe odio exercitationem quas quae expedita eligendi adipisci, harum minima voluptatem sequi quod porro ipsa debitis.",
        href: "##",
      },
      {
        id:1,
        title: "Friend Connect",
        img: friendconnect,
        descr:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis aspernatur consequuntur sunt rem saepe odio exercitationem quas quae expedita eligendi adipisci, harum minima voluptatem sequi quod porro ipsa debitis.",
        href: "##",
        type:"content"
      },
      {
        id:2,
        title: "Wine market",
        img: winemarket,
        descr:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis aspernatur consequuntur sunt rem saepe odio exercitationem quas quae expedita eligendi adipisci, harum minima voluptatem sequi quod porro ipsa debitis.",
        href: "##",
        type:"content"
      },
    ],
    grouptwo: [
      {
        id:0,
        title: "Food Samurai",
        img: winemarket,
        descr:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis aspernatur consequuntur sunt rem saepe odio exercitationem quas quae expedita eligendi adipisci, harum minima voluptatem sequi quod porro ipsa debitis.",
        href: "##",
      },
      {
        id:1,
        title: "Friend Connect",
        img: friendconnect,
        descr:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis aspernatur consequuntur sunt rem saepe odio exercitationem quas quae expedita eligendi adipisci, harum minima voluptatem sequi quod porro ipsa debitis.",
        href: "##",
        type:"content",
      },
      {
        id:2,
        title: "Wine market",
        img: foodsamurai,
        descr:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis aspernatur consequuntur sunt rem saepe odio exercitationem quas quae expedita eligendi adipisci, harum minima voluptatem sequi quod porro ipsa debitis.",
        href: "##",
        type:"content"
      },
      {
        id:3,
        title: "Web Design",
        img: winemarket,
        descr:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis aspernatur consequuntur sunt rem saepe odio exercitationem quas quae expedita eligendi adipisci, harum minima voluptatem sequi quod porro ipsa debitis.",
        href: "##",
      },
    ],
  },
};

const worksSlice = createSlice({
  name: "worksSlice",
  initialState,
  reducers: {},
});

export const {} = worksSlice.actions;
export const worksReducer = worksSlice.reducer;
