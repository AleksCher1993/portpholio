import s from "./skillItem.module.scss"
export const SkillItem=({widthBar,title})=>{
    return <div className={s.progress}>
    <h3>
      {title} <span>{widthBar}%</span>
    </h3>
    <div className={s.bar} >
      <span style={{width:`${widthBar}%`}} className="specialleftline"></span>
    </div>
  </div>
}