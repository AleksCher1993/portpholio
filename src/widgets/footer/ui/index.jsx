import { Link } from "react-scroll";
import s from "./footer.module.scss"
import { getCurrentDate } from "../../../shared/utills";
export const Footer = () => {

  return (
    <>
      <footer className={s.footer}>
        <div className={s.wrapper}>
          <div className={s.scrolltop}>
            <Link to="wrapper" duration={500} smooth><i className='bx bx-chevrons-up'></i></Link>
          </div>
          <div className={s.copy}>
            <p>
              &copy; <span> {getCurrentDate()}</span> все права защищены.
              Портфолио Александра Чернухо.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
