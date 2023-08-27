import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
type TSmoothScrollHandler = {
  smoothScrollHandler: (value: Event) => void;
};

const NavbarPresenter = ({ smoothScrollHandler }: TSmoothScrollHandler) => {
  return (
    <div className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div>
          <Link
            href="/"
            scroll={false}
            onClick={smoothScrollHandler}
            className={styles["finnet"]}>
            Finnet
          </Link>
        </div>
        <ul>
          <li>
            <a>O nas</a>
          </li>
          <li>
            <a>Funkcje</a>
          </li>
        </ul>
        <div className={styles["buttonGroup"]}>
          <Link href="https://finnet.bieda.it" rel="noopener" target="_blank">
            Przejdź do naszej aplikacji
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPresenter;
