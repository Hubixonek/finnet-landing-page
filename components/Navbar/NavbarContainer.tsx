import { useEffect, useState } from "react";
import NavbarPresenter from "./NavbarPresenter";
import { Router } from "next/router";

export default function NavbarContainer() {
  const [showNav, setShowNav] = useState(true);
  const toggleHandler = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };
  const smoothScrollHandler = () => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  };
  useEffect(() => {
    smoothScrollHandler();
  }, []);

  return (
    <NavbarPresenter
      showNav={showNav}
      setShowNav={setShowNav}
      toggleHandler={toggleHandler}
      smoothScrollHandler={smoothScrollHandler}
    />
  );
}
