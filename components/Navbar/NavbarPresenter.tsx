import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";

const NavbarPresenter = () => {
  return (
    <div className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div>
          <Link href="/" scroll={false} className={styles["finnet"]}>
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
