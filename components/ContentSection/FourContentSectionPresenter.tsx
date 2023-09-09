import styles from "../../styles/FourContentSectionPresenter.module.scss";
import Image from "next/image";
import Link from "next/link";
const FourContentSectionPresenter = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["row"]}>
        <div className={styles["column"]}>
          <div className={styles["settingsColumn"]}>
            <div className={styles["imgContainer"]}>
              <Image
                className={styles["img"]}
                src="/images/settings.png"
                alt="Rates operations"
                width={100}
                height={100}
                layout="responsive"></Image>
            </div>
            <h3>Finnetyzacja</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              non repudiandae placeat optio fuga recusandae
            </p>
          </div>
        </div>
        <div className={styles["column"]}>
          <div className={styles["searchColumn"]}>
            <div className={styles["imgContainer"]}>
              <Image
                className={styles["img"]}
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
          </div>
        </div>
        <div className={styles["column"]}>
          <div className={styles["walletColumn"]}>
            <div className={styles["imgContainer"]}>
              <Image
                className={styles["img"]}
                src="/images/wallet.png"
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourContentSectionPresenter;
