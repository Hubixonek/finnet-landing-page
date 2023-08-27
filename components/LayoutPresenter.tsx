import NavbarPresenter from "./Navbar/NavbarPresenter";
import FooterPresenter from "./Footer/FooterPresenter";
import ContentSectionPresenter from "./ContentSection/ContentSectionPresenter";
import FirstSectionPresenter from "./FirstSection/FirstSectionPresenter";
import SecondContentSectionPresenter from "./ContentSection/SecondContentSectionPresenter";
const LayoutPresenter = () => {
  return (
    <div>
      <NavbarPresenter />
      <main>
        <FirstSectionPresenter />
        <ContentSectionPresenter />
        <SecondContentSectionPresenter />
      </main>
      <FooterPresenter />
    </div>
  );
};

export default LayoutPresenter;
