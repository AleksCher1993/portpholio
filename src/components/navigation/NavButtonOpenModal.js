export const NavButtonOpenModal = ({ setIsModalOpen }) => {
  return (
    <>
      <div className="nav__send-me">
        <div
          className="send-me-message"
          onClick={() => {
            setIsModalOpen(true);
            document.body.classList.add("_lock");
          }}
        >
          Написать мне
        </div>
      </div>
    </>
  );
};
