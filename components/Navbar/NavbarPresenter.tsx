import styles from "../../styles/Navbar.module.scss";

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
          <a>Przejdź do naszej aplikacji</a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPresenter;
