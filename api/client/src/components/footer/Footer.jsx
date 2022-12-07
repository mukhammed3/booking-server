import "./footer.css";
import s from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={`${s.under} `}>
          <div className={s.container}>
            <a href="https://aliev.tech">developer: aliev.tech</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
