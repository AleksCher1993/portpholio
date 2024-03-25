import s from "./about.module.scss";
// import photo from "./../../app/assets/imgs/aboutphoto.png";
import photo from "./../../app/assets/imgs/myphoto.png";
import { useCallback, useEffect, useRef } from "react";
import { changeOffsetContentTop } from "../../widgets/header/model/headerSlice";
import { useDispatch } from "react-redux";
export const About = () => {
  const refabout=useRef()

  
const dispatch=useDispatch()
const changeOffsetClientTopHandler=useCallback(()=>{
  dispatch(changeOffsetContentTop({id:refabout.current.id,offset:refabout.current.offsetTop-50}))
},[dispatch])
useEffect(()=>{
  changeOffsetClientTopHandler()
  window.addEventListener("resize",changeOffsetClientTopHandler)
  return ()=>{
    window.removeEventListener("resize",changeOffsetClientTopHandler)
  }
},[changeOffsetClientTopHandler])
  return (
    <section ref={refabout}  className={`${s.about} `} id="about">
      <div className={`${s.wrapper}`}>
        <div className={`${s.ramka} leftline`}>
          <img src={photo} alt="myPhoto" />
        </div>
        <div className={`${s.description}`}>
          <h3 className="section__title topline">
            About <span className="section__title--span">Me</span>
          </h3>
          <h4>Frontend Developer!</h4>
          <p>
            Привет! Меня зовут Александр, я frontend разработчик. Мой опыт
            включает создание множества пет-проектов, где я применял знания
            TypeScript, React и Redux. Я страстно увлечен разработкой
            интерфейсов и постоянно стремлюсь к совершенствованию своих навыков.
            Готов воплотить в жизнь любые идеи и проекты в области
            фронтенд-разработки!
          </p>
        </div>
      </div>
    </section>
  );
};
