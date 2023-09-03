import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
const NavbarPresenter = ({ toggleHandler, setShowNav, showNav }) => {
  return (
    <div className={styles["container"]}>
      <nav className={showNav ? styles["showNav"] : styles["nav"]}>
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
        <div className={styles["hamburger"]}>
          <RxHamburgerMenu
            className={styles["hamburgerIcon"]}
            onClick={() => toggleHandler()}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavbarPresenter;
