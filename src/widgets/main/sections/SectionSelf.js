import myphoto from "../../../imgs/myphoto.jpg";
export const SectionSelf = () => {
  function getMyOld() {
    let old;
    let current = new Date().getFullYear();
    let birthDay = new Date(1993, 2, 27).getFullYear();
    old = current - birthDay;
    return old;
  }
  return (
    <section id="section_about" className="section__aboutself aboutself">
      <div className="aboutself__head head">
        <div className="aboutself__empty"></div>
        <div className="head__name">
          <h3>О себе</h3>
          <p>Front-end developer</p>
        </div>
      </div>
      <div className="aboutself__body">
        <div className="aboutself__description">
          <p>
            Привет! Меня зовут Александр Чернухо. Это мое резюме. Надеюсь оно
            тебе понравится. Свое резюме я написал на React.js. Стилистическая
            часть была сделана при помощи SASS/SCSS. Макет сайта помогали мне
            делать Vigma и Photoshop. Пролистай дальше и ты увидишь мой
            skills...
          </p>
          <ul>
            <li>
              <span>Полное имя:</span> Чернухо Александр Васильевич
            </li>
            <li>
              <span>Возраст:</span> {getMyOld()} лет
            </li>
            <li>
              <span>Email:</span> aleks.chernuho@gmail.com
            </li>
            <li>
              <span>WatsApp:</span> +7(999)214-87-57
            </li>
          </ul>
        </div>

        <div className="aboutself__photo">
          <div className="aboutself__photo-container">
            <img src={myphoto} alt="Мое фото" />
          </div>
        </div>
      </div>
    </section>
  );
};
