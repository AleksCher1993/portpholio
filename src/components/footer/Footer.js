export const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }
const scrollInto=(sectionId)=>{
  document.getElementById(sectionId).scrollIntoView({
    behavior:"smooth",
    block:"start"
  })
}
  return (
    <>
      <svg
        className="beforefooter"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
      >
        <linearGradient id="linear-gradient">
          <stop offset="0%" stopColor="#100C09" />
          <stop offset="50%" stopColor="#342B1E" />
          <stop offset="100%" stopColor="#1F1912" />
        </linearGradient>
        <polygon fill="url(#linear-gradient)" points="100,0 100,4 0,4" />
      </svg>
      <footer>
        <div className="footer__main">
          <div className="footer__main__content">
            <div className="footer__main__link ">
              <a className="active link__main" href="#">
                AleksCher
              </a>
              <a onClick={()=>scrollInto("section_about")} href="##">О себе</a>
              <a onClick={()=>scrollInto("section_skills")} href="##">Скилл</a>
              <a onClick={()=>scrollInto("section_works")} href="##">Мои работы</a>
            </div>
            <div className="footer__main__text">
              <p>
                Вау! Ты досмотрел до конца. Значит тебе понравилось! Напиши мне,
                если есть какие нибудь идеи или критика. Я постараюсь на нее
                ответить! Удачи!
              </p>
            </div>
            <div className="footer__main__logo">
              <div>
                <a href="https://vk.com/id275220347">
                  <div className="footer__logo__vk"></div>
                </a>
                <a href="#">
                  <div className="footer__logo__ws"></div>
                </a>
                <a href="https://t.me/ChernuhoAleks">
                  <div className="footer__logo__tlgr"></div>
                </a>
              </div>
              <a href="mailto:aleks.chernuho@gmail.com">Задавайте вопросы</a>
            </div>
          </div>
          <div className="footer__main__copy">
            <p>
              &copy; <span id="getYear">{getYear()}</span> все права защищены.
              Резюме Александра Чернухо.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
