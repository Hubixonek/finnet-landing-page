import styles from "../../styles/OneContentSection.module.scss";
import Image from "next/image";
const OneContentSectionPresenter = () => {
  return (
    <div className={styles["sectionGroup"]}>
      <h2>
        <strong>Maksymalne wyniki</strong>
      </h2>
      <p className={styles["pContent"]}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis debitis
        eos voluptate cumque deserunt
      </p>
      <div className={styles["container"]}>
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
            Możesz prowadzić notatki o swoich inwestycjach by zawsze pamiętać z
            czego dana inwestycja wyniknęła.
          </p>
        </div>
      </div>
      <img
        src="/images/Finnet-Pulpit.png"
        alt="FinnetPulpitImg"
        className={styles["finnetPulpitImg"]}></img>
    </div>
  );
};
export default OneContentSectionPresenter;
