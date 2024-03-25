import React from "react";
import s from "./navButtonOpenModal.module.scss"

export const NavButtonOpenModal = ({setIsModalOpen,text=""}) => {
  
  return (
    <>
      <div className={s.navSendMe}>
        <div
          className={s.sendMeMessage}
          onClick={setIsModalOpen}
        >
          {text}
        </div>
      </div>
    </>
  );
};
