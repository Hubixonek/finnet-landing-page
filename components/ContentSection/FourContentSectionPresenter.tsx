import styles from "../../styles/FourContentSectionPresenter.module.scss";
import Image from "next/image";
const FourContentSectionPresenter = () => {
  return (
    <div className={styles["sectionGroup"]}>
      <div className={styles["container"]}>
        <h2>
          <strong>Zyskaj więcej z Finnet</strong>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis debitis
          eos voluptate cumque deserunt
        </p>
        <div className={styles["descriptionContainerGroup"]}>
          <div className={styles["oneContainer"]}>
            <Image
              className={styles["rotateImage"]}
              src="/images/settings.png"
              alt="Rates operations"
              width={100}
              height={100}
              layout="responsive"></Image>
          </div>
          <div className={styles["twoContainer"]}>
            <Image
              className={styles["rotateImage"]}
              src="/images/search.png"
              alt="Rates operations"
              width={100}
              height={100}
              layout="responsive"></Image>
          </div>
          <div className={styles["threeContainer"]}>
            {" "}
            <Image
              className={styles["rotateImage"]}
              src="/images/wallet.png"
              alt="Rates operations"
              width={100}
              height={100}
              layout="responsive"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourContentSectionPresenter;
