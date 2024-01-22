import { useState } from "react";
import calendar from "../../../imgs/calendarPhoto.jpg";
import ozon from "../../../imgs/ozonPhoto.jpg";
import iphone from "../../../imgs/iphone.JPG";
import mersedes from "../../../imgs/mersedes.JPG";
import wildberris from "../../../imgs/wildberris.JPG";
import pc from "../../../imgs/pc.JPG";
import social from "./../../../imgs/socialapp.JPG"
import slavia from "./../../../imgs/slavia.JPG"
const initSectionWorks = [
  {
    id: 1,
    name: "socialApp",

    isActive: true,
    isEdit: false,
    description: `Friends connect - Социальная сеть "Demo версия". Сделано при помощи популярной библиотеки React + Redux. Данное SPA приложение было архитектурно построено на основе UI - BLL - DAL.`,
    building: `Данное SPA приложение я создавал с нуля. Визуальная часть была придумана. За BLL отвечает Redux. В DAL уровне реализованы AXIOS запросы. BLL общалось с DAL при помощи Thunk middleware. Использовал Redux-Final-Form с валидацией. Реализовано Роутинг, пагинация и многое другое...`,
    src: social,
    href: "https://alekscher1993.github.io/demo-social-app/#/profile",
    git:"https://github.com/AleksCher1993/demo-social-app",
  },
  {
    id: 2,
    name: "slavia",

    isActive: false,
    isEdit: false,
    description: `Slavia - Интернет магазин по продаже вин. Макет сайта взят с Vigma. Я реализовал чтение из БД основного товара, фильтрацию товара, добавление  удаление и отправку товара из корзины на сторонний сервер JSON-placeholder. Реализовал Slider-Swiper. `,
    building: `Frontend я реализовал при помощи JS, базу данных я сделал отдельным файлом js. Отправку данных из корзины реализовал при помощи Fetch API и JSON-placeholder. В работе мне помогал сборщик GULP, предпроцессор Scss.`,
    src: slavia,
    href: "https://alekscher1993.github.io/winemarket/index.html",
    git:"https://github.com/AleksCher1993/winemarket",
  },
  {
    id: 3,
    name: "ozone",

    isActive: false,
    isEdit: false,
    description: `O-zone market - за основу взял популярную страничку магазина ozone и сделал для нее фронтенд. Я реализовал чтение из БД основного товара, фильтрацию товара, добавление  удаление и отправку товара из корзины на сторонний сервер JSON-placeholder`,
    building: `Frontend я реализовал при помощи JS, базу данных я сделал отдельным файлом js. Отправку данных из корзины реализовал при помощи Fetch API и JSON-placeholder. Макет сайта взял готовый с курсов по програмированию школы GLO Academy.`,
    src: ozon,
    href: "https://alekscher1993.github.io/ozon-maket/",
    git:"https://github.com/AleksCher1993/ozon-maket",
  },
  {
    id: 4,
    name: "ipone",

    isActive: false,
    isEdit: false,
    description: `Страничка по продаже Iphone 13 pro. Реализовал подгрузку данных из БД, аккордион, табы. Добавил корзину товаров, сделал добавление, удаление, отправку товара из корзины. Реализовал мобильную версию странички.`,
    building: `На данном практикуме я проработал frontend при помощи JS. Дополнительно сделал мобильную версию сайта, корзину товара. В работе мне помогал сборщик GULP, предпроцессор Scss.  Макет сайта взял готовый с курсов по програмированию школы GLO Academy.`,
    src: iphone,
    href: "https://alekscher1993.github.io/iphone13/",
    git:"https://github.com/AleksCher1993/iphone13",
  },
  {
    id: 5,
    name: "Mersedes",

    isActive: false,
    isEdit: false,
    description: `Промо страница про авто Mersedes A200. Проработал frontend сделав красивый аккордеон, табы, по нажатии которых происходит подгрузка информации, сбор и отправка данных с формы на сторонний сервер JSON-placeholder. `,
    building: `Табы, аккордеон, плавный скролинг реализовано при помощи JS. Отправка данных через Fetch API и сервер JSON-placeholder. Сделал мобильную версию сайта при помощи предпроцессора SCSS. Макет сайта взял готовый с курсов по програмированию школы GLO Academy.`,
    src: mersedes,
    href: "https://alekscher1993.github.io/Mercedes_JS/",
    git:"https://github.com/AleksCher1993/Mercedes_JS",
  },
  {
    id: 6,
    name: "wildberris",
    isActive: false,
    isEdit: false,
    description: `Красивая страница от marketa wildberris. Реализовал frontend сделав плавный скролинг, добавление/удаление из корзины, фильтрацию, поиск товара, карусель, мобильную версию сайта.   `,
    building: `Практиковал frontend при помощи JS. Карусель создавал при помощи библиотеки Swiper.JS. Мобильную версию сайта реализовал при помощи SCSS. Макет сайта взял готовый с курсов по програмированию школы GLO Academy.`,
    src: wildberris,
    href: "https://alekscher1993.github.io/wildberris/",
    git:"https://github.com/AleksCher1993/wildberris",
  },
  {
    id: 7,
    name: "collectPC",
    isActive: false,
    isEdit: false,
    description: `Страничка по сборке пк. На данной страничке реализован плавный скролинг, обратный отсчет, аккордион, табы, мобильная версия сайта, отправка данных с формы, простая аутентификация (login:admin password:1234)`,
    building: `Програмировал при помощи JS, мобильная версия - при помощи SCSS. Макет сайта взял готовый с курсов по програмированию школы GLO Academy.`,
    src: pc,
    href: "https://alekscher1993.github.io/CollectPCBack/",
    git:"https://github.com/AleksCher1993/CollectPCBack",
  },
];
export const SectionWorks = () => {
  const [notes, setNotes] = useState(initSectionWorks);
  const [isActive, setActive] = useState(false);

  const resParagraph = () => {
    let result;
    notes.map((note) => {
      if (note.isActive) {
        let res;
        if (!isActive) {
          res = note.description;
        } else res = note.building;
        result = (
          < >
            <p key={note.id}>{res}</p>
            <div className="toGit">
              <a href={note.href} target="_blank">
                &mdash;Узнать больше
              </a>
              <a href={note.git} target="_blank">
                &mdash;Git Hub
              </a>
            </div>
          </>
        );
      }
    });
    return result;
  };
  const imagesList = notes.map((note) => {
    return (
      
        <div
          key={note.id}
          className="cards__img"
          onClick={() => editActiveHandler(note.id)}
        >
          <img src={note.src} alt={note.name} />
        </div>
      
    );
  });
  function activeHandler(isEdit) {
    setActive(isEdit);
    setNotes(
      notes.map((note) => {
        if (note.isActive) {
          if (!note.isEdit) {
            return { ...note, isEdit: true };
          } else return { ...note, isEdit: false };
        }
         else return note;
      })
    );
  }
  function editActiveHandler(id) {
    setActive(false);
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, isActive: true, isEdit: false };
        } else return { ...note, isActive: false, isEdit: false };
      })
    );
  }
  function getActiveImg() {
    let res;
    notes.forEach((note) => {
      if (note.isActive) {
        res = <img src={note.src} alt={note.name} />;
      }
    });
    return res;
  }
  return (
    <section className="section__works works" id="section_works">
      <div className="aboutself__head head">
        <div className="aboutself__empty"></div>
        <div className="head__name">
          <h3>Мои работы</h3>
        </div>
      </div>
      <div className="works__body">
        <div className="works__container">
          <div className="works__buttons">
            <div
              className={!isActive ? "works__button active" : "works__button"}
              onClick={() => activeHandler(false)}
            >
              Описание
            </div>
            <div
              className={!isActive ? "works__button" : "works__button active"}
              onClick={() => activeHandler(true)}
            >
              Создание
            </div>
          </div>
          <div className="works__description">{resParagraph()}</div>
        </div>
        <div className="works__img">{getActiveImg()}</div>
      </div>
      <div className="works__cards cards">{imagesList}</div>
    </section>
  );
};
