import { Header } from "../widgets/header/ui";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { CustomizedModal } from "../widgets/popup/ui";
import { selectHeaderState } from "../widgets/header/model/selectors";
import { About } from "./about";
import { MyWorks } from "./myworks";
import { scrollReveal } from "../app/utills/scrollReveal";
import { MySkills } from "./myskills";
import { Footer } from "../widgets/footer";

export const Pages = () => {
  const isShowBurgerMenu = useSelector(selectHeaderState).isShowBurgerMenu;

  useEffect(() => {
    scrollReveal();
  }, []);
  useEffect(() => {
    isShowBurgerMenu
      ? document.body.classList.add("_lock")
      : document.body.classList.remove("_lock");
  }, [isShowBurgerMenu]);

  return (
    <div id="wrapper">
      <div className="starss"></div>
      <div className="starss1"></div>
      <Header />
      <About />
      <MySkills />
      <MyWorks />
      <Footer /> 
      <CustomizedModal />
    </div>
  );
};
