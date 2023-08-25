import NavbarPresenter from "./Navbar/NavbarPresenter";
import FooterPresenter from "./Footer/FooterPresenter";
import FirstSection from "./FirstSection/FirstSection";
const LayoutPresenter = () => {
  return (
    <div>
      <NavbarPresenter />
      <main>
        <FirstSection />
      </main>
      <FooterPresenter />
    </div>
  );
};

export default LayoutPresenter;
