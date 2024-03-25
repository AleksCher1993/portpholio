import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isModalOpen:false,
}


const popupSlice=createSlice({
    name:"popupSlice",
    initialState,
    reducers:{
        changeIsModalOpen:(state,action)=>{
            state.isModalOpen=action.payload
        }
    }
})

export const {changeIsModalOpen}=popupSlice.actions;
export const popupReducer=popupSlice.reducer