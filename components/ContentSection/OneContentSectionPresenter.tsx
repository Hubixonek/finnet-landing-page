import styles from "../../styles/OneContentSection.module.scss";
const OneContentSectionPresenter = () => {
  return (
    <div className={styles["somePageWrapper"]}>
      <div className={styles["row"]}>
        <div className={styles["column"]}>
          <h2 className={styles["h2"]}>
            <strong>Maksymalne wyniki</strong>
          </h2>
          <p className={styles["pContent"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            debitis eos voluptate cumque deserunt
          </p>
          <div className={styles["descriptionOne"]}>
            <h3>Funkcję</h3>
            <p>
              Funkcje <strong>Finnet</strong> pomagają w analizie twoich
              inwestycji finansowych dzięki czemu{" "}
              <strong>przygotowują Cię</strong> do podjęcia lepszej inwestycji
              finansowej.
            </p>
          </div>
          <div className={styles["descriptionTwo"]}>
            <h3>Inwestycje</h3>
            <p>
              Możesz zapisywać dane o swoich inwestycjach i prowadzić historię
              inwestycyjną
            </p>
          </div>
          <div className={styles["descriptionThree"]}>
            <h3>Notatki</h3>
            <p>
              Możesz prowadzić notatki o swoich inwestycjach by zawsze pamiętać
              z czego dana inwestycja wyniknęła.
            </p>
          </div>
        </div>
        <div className={styles["column"]}>
          <ul>
            <li>
              <img src="/images/Pulpit.png" alt="FinnetPulpitImg"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default OneContentSectionPresenter;
