import styles from "../../styles/FourContentSectionPresenter.module.scss";
import Image from "next/image";
import Link from "next/link";
const FourContentSectionPresenter = () => {
  return (
    <div className={styles["sectionGroup"]}>
      <div className={styles["container"]}>
        <h2 className={styles["h2"]}>
          <strong>Zyskaj więcej z Finnet</strong>
        </h2>
        <p className={styles["p"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis debitis
          eos voluptate cumque deserunt
        </p>
        <div className={styles["descriptionContainerGroup"]}>
          <div className={styles["container"]}>
            <div className={styles["containerImage"]}>
              <Image
                className={styles["settingsImage"]}
                src="/images/settings.png"
                alt="Rates operations"
                width={100}
                height={100}
                layout="responsive"></Image>
            </div>
            <h3>Automatyzacja</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              non repudiandae placeat optio fuga recusandae
            </p>
            <div className={styles["btnContainer"]}>
              <Link
                href=""
                rel="noopener"
                target="_blank"
                className={styles["btnCustom"]}>
                Miejsce na przekierowanie
              </Link>
            </div>
          </div>
          <div className={styles["container"]}>
            <div className={styles["containerImage"]}>
              <Image
                className={styles["searchImage"]}
                src="/images/search.png"
                alt="Rates operations"
                width={100}
                height={100}
                layout="responsive"></Image>
            </div>
            <h3>Finnet Forum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              non repudiandae placeat optio fuga recusandae
            </p>
            <div className={styles["btnContainer"]}>
              <Link
                href=""
                rel="noopener"
                target="_blank"
                className={styles["btnCustom"]}>
                Miejsce na przekierowanie
              </Link>
            </div>
          </div>
          <div className={styles["container"]}>
            {" "}
            <div className={styles["containerImage"]}>
              <Image
                className={styles["walletImage"]}
                src="/images/wallet.png"
                alt="Rates operations"
                width={100}
                height={100}
                layout="responsive"></Image>
            </div>
            <h3>Finnetyzacja </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              non repudiandae placeat optio fuga recusandae
            </p>
            <div className={styles["btnContainer"]}>
              <Link
                href=""
                rel="noopener"
                target="_blank"
                className={styles["btnCustom"]}>
                Miejsce na przekierowanie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourContentSectionPresenter;
