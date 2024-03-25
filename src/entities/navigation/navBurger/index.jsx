import React, { useEffect, useState } from "react";
import s from "./navBurger.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { changeBurgerMenu } from "../../../widgets/header/model/headerSlice";
import { selectHeaderState } from "../../../widgets/header/model/selectors";
export const NavBurger = () => {
  const isShowBurgerMenu=useSelector(selectHeaderState).isShowBurgerMenu
  let dispatch=useDispatch()
  let [isShow,setShow]=useState(false)
  const showBurgerMenu=()=>{
dispatch(changeBurgerMenu(!isShow))
setShow(!isShow)
  }
  useEffect(()=>{
    setShow(isShowBurgerMenu)
  },[isShowBurgerMenu ])
  return (
    <>
      <div className={s.navBurger} onClick={showBurgerMenu}>
        <div className={!isShow?s.navBurderButton:s.navBurgerCloseButton} id="nav__burder__button">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </>
  );
};
