import styles from "../../styles/ThreeContentSectionPresenter.module.scss";
import Link from "next/link";
import { FaWallet } from "react-icons/fa";
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
        Miejsce na przekierowanie
      </Link>
      <div className={styles["container"]}>
        <img
          src="/images/WalletComposition.png"
          alt="FinnetPulpitImg"
          className={styles["finnetWalletCompositionImg"]}></img>
      </div>
    </div>
  );
};

export default ThreeContentSectionPresenter;
