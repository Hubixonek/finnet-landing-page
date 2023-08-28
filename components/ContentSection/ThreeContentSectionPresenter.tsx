import styles from "../../styles/ThreeContentSectionPresenter.module.scss";
import Link from "next/link";
import Image from "next/image";
import { BiSolidWallet } from "react-icons/bi";
const ThreeContentSectionPresenter = () => {
  return (
    <div className={styles["section"]}>
      <h1>Moja kolejna sekcja</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quae
        numquam, nesciunt inventore cum minima facilis quisquam dolorem.
      </p>
      <Link
        href=""
        rel="noopener"
        target="_blank"
        className={styles["btnCustom"]}>
        Jakies przekierowanie?
      </Link>
      <div className={styles["container"]}>
        <div className={styles["imageContainer"]}>
          <Image
            className={styles["walletCompositionImage"]}
            src="/images/WalletComposition.png"
            alt="Rates operations"
            width={100}
            height={100}
            layout="responsive"></Image>
        </div>
        <div className={styles["description"]}>
          <div className={styles["iconContainer"]}>
            <BiSolidWallet className={styles["walletIcon"]} />{" "}
            <span>Stwórz swój portfel</span>
            <p>
              Przykładowy tekst dla Finnet appki :D Testowy tekst testowy tekst
              testowy tekst testowy tekst testowy tekst testowy tekst testowy
              tekst testowy tekst testowy tekst testowy test testowy test
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeContentSectionPresenter;
