import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import s from "./navLinks.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { changeBurgerMenu } from "../../header/model/headerSlice";
import { changeIsModalOpen } from "../../popup/model/popupSlice";

export const NavLinks = () => {
  let [activeButton,setActiveButton]=useState(0)
  const navList=useSelector(state=>state.header.nav)
  const isShowBurgerMenu=useSelector(state=>state.header.isShowBurgerMenu)

  const ref=useRef()
  let dispatch = useDispatch();
  const closeBuregr=(type="")=>{
    dispatch(changeBurgerMenu(false))
    if (type==="popup") { 
      dispatch(changeIsModalOpen(true))
    }
  }
  const handleScroll=useCallback(()=>{
    const scrollPosition = window.scrollY;
    
    if (scrollPosition<navList[1].offsetTop) {
      setActiveButton(0)
    }else if (scrollPosition>=navList[1].offsetTop && scrollPosition<navList[2].offsetTop) {
      setActiveButton(1)
    }else{
      setActiveButton(2)
    }

  },[navList])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[handleScroll])


  let lis=navList.map((link)=> <li  key={link.id} className={`${s.navLink} ${activeButton===link.id?s.active:""} `}>
    <Link onClick={closeBuregr} to={link.href} duration={500} smooth>{link.name}</Link>
  </li>
  )
  return (
    <ul ref={ref}
      className={ `${s.navLinks} ${isShowBurgerMenu?s.activeBurger:""}`}>
      {lis}
      <li onClick={()=>closeBuregr("popup")} className={`${s.navLink} ${s.navLinkForMobile}`}><a href="##">Написать мне</a></li>
    </ul>
  );
};
