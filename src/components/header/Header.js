export const Header = () => {
  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__head">
            <p>Добро пожаловать!</p>
            <p>Меня зовут Александр</p>
            <p>Это мое резюме</p>
          </div>

          <a
            className="header__button"
            href=""
            download="rezumeChernuhoAleksandr"
          >
            <span>cкачать резюме</span>
          </a>
        </div>
      </header>
      <div className="afterheader"></div>
    </>
  );
};
