import { configureStore } from "@reduxjs/toolkit";
import { headerReducer } from "../../widgets/header";
import { popupReducer } from "../../widgets/popup/model/popupSlice";
import { skillsReducer } from "../../widgets/skillsList";
import { worksReducer } from "../../widgets/worksList/model/workSlice";

const store=configureStore({
    reducer:{
        header:headerReducer,
        popup:popupReducer,
        skills:skillsReducer,
        works:worksReducer,
    }
})
export default store