import { useState } from "react";
import { Nav } from "../../navigation";
import s from "./header.module.scss";
import { ReactTyped } from "react-typed";
import photo from "./../../../app/assets/imgs/photoheader.png";
export const Header = () => {
  const [isFixed,setNavFixed]=useState(false)
  return (
    <header>
      
      <Nav isFixed={isFixed} setNavFixed={setNavFixed}/>
      <div className={`${s.wrapper} ${isFixed ? s.mtop : ""}`}>
        <div className={`${s.description} topline`}>
          <h3>Привет, Это я</h3>
          <h1 className="headline">
            <span>
              <ReactTyped
                strings={["Александр Чернухо", "Frontend developer"]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p>
            Приветствую вас на странице моего портфолио, где вы сможете
            окунуться в небольшой уголок моего мира.
          </p>
          <div className={s.downloadSV}>
            <button className={s.button}>
              <a download={false} href="##">
                Скачать CV
              </a>
            </button>
          </div>
        </div>
        <div className={`${s.photo} bottomline`}>
          <img src={photo} alt="photo" />
        </div>
      </div>
    </header>
  );
};
