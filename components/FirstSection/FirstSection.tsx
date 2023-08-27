import styles from "../../styles/FirstSection.module.scss";
import Button from "react-bootstrap/Button";
import Image from "next/image";
const FirstSection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["styledColumn"]}>
        <div className={styles["uiTextBlock"]}>
          <h1>
            Finnet wspiera inwestycję oraz udostępnia narzędzia do analizy
          </h1>
          <p>Wszystko co potrzebne w jednej aplikacji - inwestuj i mnóż.</p>
          <Button variant="light" className={styles["btnCustom"]}>
            Skorzystaj z Finnet już dziś!
          </Button>
        </div>
      </div>
      <div className={styles["picturesContainer"]}>
        <Image
          className={styles["rotateImage"]}
          src="/images/Finnet.png"
          alt="Ludki"
          width={100}
          height={100}
          layout="responsive"></Image>
        <div className={styles["depositImageContainer"]}>
          <Image
            className={styles["depositImageStyles"]}
            src="/images/deposit-landing-page.png"
            alt="deposit-landing-page"
            width={100}
            height={200}></Image>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
