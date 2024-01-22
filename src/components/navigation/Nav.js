import { useState } from "react";
import { NavBrand } from "./NavBrand";
import { NavBurger } from "./NavBurger";
import { NavButtonOpenModal } from "./NavButtonOpenModal";
import { NavLinks } from "./NavLinks";

export const Nav = ({ setIsModalOpen }) => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  function burgerHandler() {
    if (!isActiveBurger) {
      setIsActiveBurger(true);
      document.body.classList.add("_lock");
    } else {
      setIsActiveBurger(false);
      document.body.classList.remove("_lock");
    }
  }
  return (
    <nav className="nav">
      <div className="nav__container">
        <NavBrand />
        <NavBurger burgerHandler={burgerHandler} />
        <NavLinks isActiveBurger={isActiveBurger} />
        <NavButtonOpenModal setIsModalOpen={setIsModalOpen} />
      </div>
    </nav>
  );
};
