import styles from "../../styles/ContentSection.module.scss";
import Image from "next/image";
const ContentSectionPresenter = () => {
  return (
    <div className={styles["sectionGroup"]}>
      <div className={styles["container"]}>
        <h2>
          <strong>Maksymalne wyniki</strong>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis debitis
          eos voluptate cumque deserunt, sit eveniet quo cum officiis sapiente
          earum distinctio magni est minima autem corporis enim asperiores
          quibusdam.
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
            Możesz prowadzić notatki o swoich inwestycjach by zawsze pamiętać z
            czego dana inwestycja wyniknęła.
          </p>
        </div>
      </div>
      <div className={styles["finnetPulpit"]}>
        <Image
          className={styles["finnetImage"]}
          src="/images/Finnet-Pulpit.png"
          alt="Rates operations"
          width={1000}
          height={1000}
          layout="responsive"></Image>
      </div>
    </div>
  );
};
export default ContentSectionPresenter;
