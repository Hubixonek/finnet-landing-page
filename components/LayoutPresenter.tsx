import NavbarPresenter from "./Navbar/NavbarPresenter";
import FooterPresenter from "./Footer/FooterPresenter";
import ContentSectionPresenter from "./ContentSection/OneContentSectionPresenter";
import FirstSectionPresenter from "./ContentSection/FirstSectionPresenter";
import SecondContentSectionPresenter from "./ContentSection/TwoContentSectionPresenter";
import ThreeContentSectionPresenter from "./ContentSection/ThreeContentSectionPresenter";
import FourContentSectionPresenter from "./ContentSection/FourContentSectionPresenter";
import FiveContentSectionPresenter from "./ContentSection/FiveContentSectionPresenter";
type TSmoothScrollHandler = {
  smoothScrollHandler: () => void;
};
const LayoutPresenter: React.FC<TSmoothScrollHandler> = ({
  smoothScrollHandler,
}) => {
  return (
    <div>
      <NavbarPresenter smoothScrollHandler={smoothScrollHandler} />
      <main>
        <FirstSectionPresenter />
        <ContentSectionPresenter />
        <SecondContentSectionPresenter />
        <ThreeContentSectionPresenter />
        <FourContentSectionPresenter />
        <FiveContentSectionPresenter />
      </main>
      <FooterPresenter />
    </div>
  );
};

export default LayoutPresenter;
