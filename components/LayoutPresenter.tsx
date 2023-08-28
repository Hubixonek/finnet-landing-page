import NavbarPresenter from "./Navbar/NavbarPresenter";
import FooterPresenter from "./Footer/FooterPresenter";
import ContentSectionPresenter from "./ContentSection/OneContentSectionPresenter";
import FirstSectionPresenter from "./FirstSection/FirstSectionPresenter";
import SecondContentSectionPresenter from "./ContentSection/TwoContentSectionPresenter";
import ThreeContentSectionPresenter from "./ContentSection/ThreeContentSectionPresenter";
import FourContentSectionPresenter from "./ContentSection/FourContentSectionPresenter";
const LayoutPresenter = () => {
  return (
    <div>
      <NavbarPresenter />
      <main>
        <FirstSectionPresenter />
        <ContentSectionPresenter />
        <SecondContentSectionPresenter />
        <ThreeContentSectionPresenter />
        <FourContentSectionPresenter />
      </main>
      <FooterPresenter />
    </div>
  );
};

export default LayoutPresenter;
