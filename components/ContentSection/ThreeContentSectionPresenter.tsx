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
        Miejsce na przekierowanie
      </Link>
      <div className={styles["container"]}>
        <div className={styles["description"]}></div>
      </div>
    </div>
  );
};

export default ThreeContentSectionPresenter;
