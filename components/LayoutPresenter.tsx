import NavbarPresenter from "./Navbar/NavbarPresenter";
import FooterPresenter from "./Footer/FooterPresenter";
import ContentSectionPresenter from "./ContentSection/ContentSectionPresenter";
import FirstSectionPresenter from "./FirstSection/FirstSectionPresenter";
const LayoutPresenter = () => {
  return (
    <div>
      <NavbarPresenter />
      <main>
        <FirstSectionPresenter />
        <ContentSectionPresenter />
      </main>
      <FooterPresenter />
    </div>
  );
};

export default LayoutPresenter;
