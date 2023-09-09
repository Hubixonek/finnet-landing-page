import styles from "../../styles/TwoContentSection.module.scss";
import {
  BiMoneyWithdraw,
  BiLineChart,
  BiNotepad,
  BiBrain,
} from "react-icons/bi";
import { RiWifiOffLine } from "react-icons/ri";
const TwoSecondContentSectionPresenter = () => {
  return (
    <div className={styles["sectionGroup"]}>
      <div className={styles["container"]}></div>
      <div className={styles["descriptionContainerGroup"]}>
        <div className={styles["desciprtionContainerOne"]}>
          <div className={styles["dollarIconContainer"]}>
            <BiMoneyWithdraw className={styles["dollarIcon"]} />
          </div>
          <div className={styles["description"]}>
            <h3>Miejsce na tytuł</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              sint aliquam nesciunt molestiae voluptas quo hic quod, fugit
              explicabo nostrum iusto veritatis.
            </p>
          </div>
        </div>

        <div className={styles["desciprtionContainerTwo"]}>
          <div className={styles["chartIconContainer"]}>
            <BiLineChart className={styles["chartIcon"]} />
          </div>
          <div className={styles["description"]}>
            <h3>Miejsce na tytuł</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              sint aliquam nesciunt molestiae voluptas quo hic quod, fugit
              explicabo nostrum iusto veritatis.
            </p>
          </div>
        </div>
        <div className={styles["desciprtionContainerThree"]}>
          <div className={styles["noteIconContainer"]}>
            <BiNotepad className={styles["noteIcon"]} />
          </div>
          <div className={styles["description"]}>
            <h3>Miejsce na tytuł</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              sint aliquam nesciunt molestiae voluptas quo hic quod, fugit
              explicabo nostrum iusto veritatis.
            </p>
          </div>
        </div>
        <div className={styles["desciprtionContainerFour"]}>
          <div className={styles["brainIconContainer"]}>
            <BiBrain className={styles["brainIcon"]} />
          </div>
          <div className={styles["description"]}>
            <h3>Miejsce na tytuł</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              sint aliquam nesciunt molestiae voluptas quo hic quod, fugit
              explicabo nostrum iusto veritatis.
            </p>
          </div>
        </div>
        <div className={styles["desciprtionContainerFive"]}>
          <div className={styles["wifiOfflineIconContainer"]}>
            <RiWifiOffLine className={styles["wifiOfflineIcon"]} />
          </div>
          <div className={styles["description"]}>
            <h3>Miejsce na tytuł</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              sint aliquam nesciunt molestiae voluptas quo hic quod, fugit
              explicabo nostrum iusto veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoSecondContentSectionPresenter;
