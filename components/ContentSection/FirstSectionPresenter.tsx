import Image from "next/image";
import styles from "../../styles/FirstSection.module.scss";
import Link from "next/link";
const FirstSectionPresenter = () => {
  return (
    <div>
      <section className={styles["section"]}>
        <div className={styles["styledColumn"]}>
          <div className={styles["uiTextBlock"]}>
            <h1>
              Finnet wspiera inwestycję oraz udostępnia narzędzia do analizy
            </h1>
            <p>Wszystko co potrzebne w jednej aplikacji - inwestuj i mnóż.</p>
            <Link
              href="https://finnet.bieda.it/registerform"
              rel="noopener"
              target="_blank"
              className={styles["btnCustom"]}>
              Zarejestruj się w Finnet
            </Link>
          </div>
        </div>
        <img
          src="/images/Finnet-Operacje-Walutowe.png"
          alt="Nature"
          className={styles["responsive"]}></img>
        <img
          src="/images/deposit-landing-page.png"
          className={styles["responsiveSecond"]}></img>
      </section>
    </div>
  );
};

export default FirstSectionPresenter;
