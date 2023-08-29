import styles from "../../styles/FiveContentSectionPresenter.module.scss";
import Link from "next/link";
const FiveContentSectionPresenter = () => {
  return (
    <div className={styles["section"]}>
      <h2>Zacznij z Finnet już dzisiaj</h2>
      <Link
        href=""
        rel="noopener"
        target="_blank"
        className={styles["btnCustom"]}>
        Zarejestruj się - to za darmo!
      </Link>
    </div>
  );
};

export default FiveContentSectionPresenter;
