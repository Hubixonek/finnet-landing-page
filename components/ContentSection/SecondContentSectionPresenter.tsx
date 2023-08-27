import styles from "../../styles/SecondContentSection.module.scss";
const SecondContentSectionPresenter = () => {
  return (
    <div className={styles["sectionGroup"]}>
      <div className={styles["container"]}>
        <h1>To jest moja druga sekcja z zawartością</h1>
      </div>
      <div className={styles["descriptionContainerGroup"]}>
        <div className={styles["desciprtionContainerOne"]}></div>
        <div className={styles["desciprtionContainerTwo"]}></div>
        <div className={styles["desciprtionContainerThree"]}></div>
        <div className={styles["desciprtionContainerFour"]}></div>
        <div className={styles["desciprtionContainerFive"]}></div>
      </div>
    </div>
  );
};

export default SecondContentSectionPresenter;
