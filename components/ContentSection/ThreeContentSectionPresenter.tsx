import Image from "next/image";
import styles from "../../styles/ThreeContentSectionPresenter.module.scss";
import Link from "next/link";
const ThreeContentSectionPresenter = () => {
  return (
    <div className={styles["section"]}>
      <div className={styles["text"]}>
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
      </div>

      <div className={styles["container"]}>
        <ul>
          <li>
            <Image
              width={1000}
              height={400}
              src="/images/WalletComposition.png"
              alt="FinnetPulpitImg"
              className={styles["finnetWalletCompositionImg"]}></Image>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThreeContentSectionPresenter;
