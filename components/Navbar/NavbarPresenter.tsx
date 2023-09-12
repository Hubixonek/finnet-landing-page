import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
type TNavbarPresenterProps = {
  toggleHandler: () => void;
  setShowNav: (showNav: boolean) => void;
  showNav: boolean;
  smoothScrollHandler: () => void;
};

const NavbarPresenter = ({
  toggleHandler,
  setShowNav,
  showNav,
  smoothScrollHandler,
}: TNavbarPresenterProps) => {
  return (
    <div className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div>
          <Link
            href="/"
            scroll={false}
            className={styles["finnet"]}
            onClick={smoothScrollHandler}>
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
          {showNav ? (
            <RxHamburgerMenu
              className={styles["hamburgerIcon"]}
              onClick={() => toggleHandler()}
            />
          ) : (
            <IoMdClose
              className={styles["hamburgerIcon"]}
              onClick={() => toggleHandler()}
            />
          )}
        </div>
      </nav>
      <div
        className={`${styles["navSlide"]} ${
          !showNav ? styles["navSlideOpen"] : ""
        }`}>
        <ul>
          <li>
            <a>O nas</a>
          </li>
          <li>
            <a>Funkcje</a>
          </li>
          <li>
            <Link
              href="https://finnet.bieda.it"
              rel="noopener"
              target="_blank"
              className={styles["linkMobileStyle"]}>
              Przejdź do naszej aplikacji
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarPresenter;
