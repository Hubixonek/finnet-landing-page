import styles from "../../styles/Footer.module.scss";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const FooterPresenter = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["elements"]}>
        <div className={styles["titleAndLogin"]}>
          <h2>Finnet</h2>
          <Link
            href="https://finnet.bieda.it/loginform"
            rel="noopener"
            target="_blank"
            className={styles["login"]}>
            Zaloguj się
          </Link>
        </div>
        <Link
          className={styles["footerDescription"]}
          href="https://finnet.bieda.it/loginform"
          rel="noopener"
          target="_blank">
          <h3>O Finnet</h3>
          <p>Za kulisami Finnetu.</p>
        </Link>
        <Link
          className={styles["footerDescription"]}
          href="https://finnet.bieda.it/loginform"
          rel="noopener"
          target="_blank">
          <h3>O pracy</h3>
          <p>Zobacz jak się pracuje w zespole Finnet.</p>
        </Link>
        <Link
          className={styles["footerDescription"]}
          href="https://finnet.bieda.it/loginform"
          rel="noopener"
          target="_blank">
          <h3>Aplikacja</h3>
          <p>Skorzystaj z Finnet na swojej przeglądarce.</p>
        </Link>
        <Link
          className={styles["footerDescription"]}
          href="https://finnet.bieda.it/loginform"
          rel="noopener"
          target="_blank">
          <h3>Kontakt</h3>
          <p>Potrzebujesz czegoś? Zrobimy co możemy by pomóc.</p>
        </Link>
      </div>
      <div className={styles["sectionLine"]} />
      <div className={styles["textSection"]}>
        <ul>
          <li>Polityka prywatności</li>
          <li>Warunki</li>
          <li>
            <span>Copyright</span>
          </li>
          <div className={styles["mediaIconSection"]}>
            <div className={styles["icon"]}>
              <FaFacebookSquare />
            </div>
            <div className={styles["icon"]}>
              <FaInstagramSquare />
            </div>
            <div className={styles["icon"]}>
              <FaLinkedin />
            </div>
            <div className={styles["icon"]}>
              <FaTwitter />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FooterPresenter;
