import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { changeIsModalOpen } from "./../model/popupSlice";
import s from "./popup.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { popupState } from "./../model/selectors";
Modal.setAppElement("#root");

export const CustomizedModal = () => {
  let isModalOpen = useSelector(popupState).isModalOpen;
  let dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(isModalOpen);
  useEffect(() => {
    setModalIsOpen(isModalOpen);
  }, [isModalOpen]);

  const closeModal = () => {
    setModalIsOpen(false);
    dispatch(changeIsModalOpen(false));
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName={s.overflowModal}
      className={s.modalBody}
      ariaHideApp={false}
    >
      <div>
      <div className={s.stars}></div>
          <div className={s.stars2}></div>
          <div className={s.stars3}></div>
        <div className={s.loginFormContainer}>

          
            <CloseIcon onClick={closeModal} className={s.modalClose} />
            <h3 className={s.loginFormTitle}>Feed back</h3>
            <form action="##" className={s.loginForm}>
              <input
                type="text"
                placeholder="Как вас зовут"
                className={s.loginInput}
              />
              <input
                type="email"
                placeholder="Введите email"
                className={s.loginInput}
              />
              <textarea placeholder="Описание" className={s.loginTextarea} />
              <button type="submit" className={s.loginButton}>
                Отправить
              </button>
            </form>
          </div>
        
      </div>
    </Modal>
  );
};
