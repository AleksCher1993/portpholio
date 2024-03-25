import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavBrand } from "../../../entities/navigation/navBrand";
import { NavBurger } from "../../../entities/navigation/navBurger";
import { NavButtonOpenModal } from "./../../../shared/button";
import { NavLinks } from "./../navLinks";
import s from "./nav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeIsModalOpen } from "./../../../widgets/popup/model/popupSlice";
import { popupState } from "../../popup/model/selectors";

export const Nav = ({setNavFixed,isFixed}) => {
  let refId = useRef(null);

  let dispatch = useDispatch();
  const setIsModalOpen = () => {
    dispatch(changeIsModalOpen(true));
  };
  const navFixed = () => {
    if (window.scrollY >= 200) {
      setNavFixed(true);
    } else setNavFixed(false);
  };
  const isModalOpen = useSelector(popupState).isModalOpen;
  useEffect(() => {
    window.addEventListener("scroll", navFixed);
    return () => {
      window.removeEventListener("scroll", navFixed);
    };
  }, []);
  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      const scrollBarWidth = window.innerWidth - body.clientWidth;
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollBarWidth}px`;
      refId.current.style.right = `${scrollBarWidth}px`;
    }
    return () => {
      body.style.overflow = "auto";
      body.style.paddingRight = "0";
      refId.current.style.right = `0`;
    };
  }, [isModalOpen]);

  return (
    <nav ref={refId} className={`${s.nav} ${isFixed ? s.navScroll : ""}`}>
      <div className={s.navContainer}>
        <NavBrand />
        <NavBurger />
        <NavLinks />
        <NavButtonOpenModal
          setIsModalOpen={setIsModalOpen}
          text="Написать мне"
        />
      </div>
    </nav>
  );
};
