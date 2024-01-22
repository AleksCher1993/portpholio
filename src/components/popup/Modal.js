import { useState } from "react";

export const Modal = ({ setIsModalOpen, isModalOpen }) => {
  let modal;
  if (!isModalOpen) {
    modal = "";
  } else
    modal = (
      <div className="modal" id="modal" onClick={(e) => closeHandler(e)}>
        <div className="modal__container">
          <h3>Feed back</h3>
          <form action="##">
            <div className="form__container">
              <input type="text" id="email" name="name" placeholder="имя" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email-адрес"
              />
            </div>
            <textarea
              name=""
              id=""
              
              rows="2"
              placeholder="описание"
            />
            <input className="modal__submit" type="submit" />
          </form>
          <div className="modal__close" onClick={closeBtnHandler}></div>
        </div>
      </div>
    );
  function closeHandler(event) {
    if (!event.target.closest(".modal__container")) {
      setIsModalOpen(false);
      document.body.classList.remove("_lock");
    }
  }
  function closeBtnHandler() {
    setIsModalOpen(false);
    document.body.classList.remove("_lock");
  }
  return <>{modal}</>;
};
