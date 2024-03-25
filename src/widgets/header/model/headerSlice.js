import { createSlice } from "@reduxjs/toolkit"

const initialState={
    nav:[
        {id:0,name:"О себе",href:"about", offsetTop:0},
        {id:1,name:"Скилл",href:"skills", offsetTop:0},
        {id:2,name:"Мои работы",href:"works", offsetTop:0},
    ],
    offsetContentTop:[],
    scrollPoints:200,
    isShowBurgerMenu:false,

}

const headerSlice=createSlice({
    name:"header",
    initialState,
    reducers:{
        changeBurgerMenu:(state,action)=>{
            state.isShowBurgerMenu=action.payload
        },
        changeOffsetContentTop:(state,actions)=>{
            const item=state.nav.find(i=>i.href===actions.payload.id)
            let offsTop=actions.payload.offset
            item.offsetTop=offsTop?offsTop:0
        }
    }
})

export const {changeBurgerMenu,changeOffsetContentTop}=headerSlice.actions;
export const headerReducer= headerSlice.reducer