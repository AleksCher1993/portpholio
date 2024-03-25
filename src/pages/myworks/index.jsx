import { useCallback, useRef } from "react";
import { WorksList } from "../../widgets/worksList/ui";
import s from "./myworks.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {changeOffsetContentTop} from "./../../widgets/header/model/headerSlice"
export const MyWorks = () => {
const refworks=useRef(null)
const dispatch=useDispatch()
const changeOffsetClientTopHandler=useCallback(()=>{
  dispatch(changeOffsetContentTop({id:refworks.current.id,offset:refworks.current.offsetTop-50}))
},[dispatch])
useEffect(()=>{
  changeOffsetClientTopHandler()
  window.addEventListener("resize",changeOffsetClientTopHandler)
  return ()=>{
    window.removeEventListener("resize",changeOffsetClientTopHandler)
  }
},[changeOffsetClientTopHandler])
  return (
    <section ref={refworks} className={`${s.myworks}`} id="works">
      <div className={`${s.wrapper}`}>
        
        <div className={`${s.description} topline`}>
          <h3 className="section__title">
            My <span className="section__title--span">Portfolio</span>
          </h3>
        </div>
        <WorksList/>
      </div>
    </section>
  );
};
