import s from "./worksItem.module.scss"
export const WorksItem=({img,title,descr,href})=>{
    
    return <div className={`${s.item} `} >
        <img src={img} alt="" />
        <div className={s.layer}>
            <h4>{title}</h4>
            <p>{descr}</p>
            <a href={href}><i className='bx bx-link-external'></i></a>
        </div>
    </div>
}