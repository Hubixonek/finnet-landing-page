import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";

const NavbarPresenter = () => {
  return (
    <div className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div>
          <a className={styles["finnet"]}>Finnet</a>
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
