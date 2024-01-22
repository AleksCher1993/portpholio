import react, { useState } from "react";

const linksName = [
  "О себе",
  "Скилл",
  "Мои работы",
  "Скачать резюме",
  "Написать мне",
];
const sectionName=[
  "section_about",
  "section_skills",
  "section_works"
]
export const NavLinks = ({ isActiveBurger }) => {
  const [activeNumber, setActiveNumber] = useState(0);
  const scrollInto=(sectionId)=>{
    document.getElementById(sectionId).scrollIntoView({
      behavior:'smooth',
      block:"start"
    })
  }
  const lis = linksName.map((link, index) => {
    let li;
    if (index === 3||index===4) {
      li = (
        <li key={index} className="nav__link nav__link-for-mobile">
          <a href="##">{link}</a>
        </li>
      );
    }
     else {
      li = (
        <li
          key={index}
          className={index === activeNumber ? "nav__link active" : "nav__link"}
          onClick={() => {
            scrollInto(sectionName[index])
            setActiveNumber(index)
          }}
        >
          <a href="##">{link}</a>
        </li>
      );
    }
    return li;
  });

  return (
    <ul
      className={!isActiveBurger ? "nav__links" : "nav__links active__burger"}
    >
      {lis}
    </ul>
  );
};
