import styles from "../../styles/FirstSection.module.scss";
import Link from "next/link";
const FirstSectionPresenter = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["uiTextBlock"]}>
        <div className={styles["textSection"]}>
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
        <ul>
          <li>
            <img
              src="/images/Finnet-Operacje-Walutowe.png"
              alt="FinnetCurrencyOperations"></img>
          </li>
          <li>
            <img
              src="/images/deposit-landing-page.png"
              alt="DepositFinnet"></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FirstSectionPresenter;
