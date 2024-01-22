export const NavBurger = ({ burgerHandler }) => {
  return (
    <>
      <div className="nav__burger" onClick={burgerHandler}>
        <div className="nav__burder__button" id="nav__burder__button">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </>
  );
};
