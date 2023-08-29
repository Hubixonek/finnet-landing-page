import NavbarPresenter from "../components/Navbar/NavbarPresenter";
import FooterPresenter from "../components/Footer/FooterPresenter";
import ContentSectionPresenter from "../components/ContentSection/OneContentSectionPresenter";
import FirstSectionPresenter from "../components/ContentSection/FirstSectionPresenter";
import SecondContentSectionPresenter from "../components/ContentSection/TwoContentSectionPresenter";
import ThreeContentSectionPresenter from "../components/ContentSection/ThreeContentSectionPresenter";
import FourContentSectionPresenter from "../components/ContentSection/FourContentSectionPresenter";
import FiveContentSectionPresenter from "../components/ContentSection/FiveContentSectionPresenter";

const HomePage = () => {
  return (
    <div>
      <NavbarPresenter />
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

export default HomePage;
