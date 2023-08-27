import NavbarPresenter from "./NavbarPresenter";
import { Router } from "next/router";

type TSmoothScrollHandler = () => void;
const NavbarContainer = () => {
  const smoothScrollHandler: TSmoothScrollHandler = () => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  };
  return <NavbarPresenter smoothScrollHandler={smoothScrollHandler} />;
};

export default NavbarContainer;
