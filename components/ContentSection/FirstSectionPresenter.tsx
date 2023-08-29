import styles from "../../styles/FirstSection.module.scss";
import Link from "next/link";
import Image from "next/image";
const FirstSectionPresenter = () => {
  return (
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
      <div className={styles["picturesContainer"]}>
        <Image
          className={styles["rotateImage"]}
          src="/images/Finnet.png"
          alt="Rates operations"
          width={100}
          height={100}
          layout="responsive"></Image>
        <Image
          className={styles["depositImage"]}
          src="/images/deposit-landing-page.png"
          alt="Deposit/Payouts"
          width={200}
          height={200}></Image>
        <Image
          className={styles["depositThoastImage"]}
          src="/images/Finnet-Thoast.png"
          alt="Deposit thoast"
          width={250}
          height={70}></Image>
      </div>
    </section>
  );
};

export default FirstSectionPresenter;
