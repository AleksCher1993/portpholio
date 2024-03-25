import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: {
    skillsList: [
      { id: 0, title: "Graphic Skills", skillsItemId: "ed12-grld-6fsq" },
      { id: 1, title: "Codding Skills", skillsItemId: "9fhr-nvu4-72ka" },
    ],
    skillsItem: [
      {
        id: "ed12-grld-6fsq",
        items: [
          { title: "HTML", percent: 85 },
          { title: "CSS", percent: 85 },
          { title: "SCSS", percent: 85 },
          { title: "UI", percent: 75 },

        ],
      },
      {
        id: "9fhr-nvu4-72ka",
        items: [
            { title: "JavaScript", percent: 75 },
          { title: "TypeScript", percent: 65 },
          { title: "React", percent: 75 },
          { title: "Redux Toolkit", percent: 65 },
        ],
      },
    ],
  },
};

const skillsSlice = createSlice({
  name: "skillsSlice",
  initialState,
  reducers: {},
});

export const {} = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;
