import { useState } from "react";
import NavbarPresenter from "./NavbarPresenter";

export default function NavbarContainer() {
  const [showNav, setShowNav] = useState(true);
  const toggleHandler = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  return (
    <NavbarPresenter
      showNav={showNav}
      setShowNav={setShowNav}
      toggleHandler={toggleHandler}
    />
  );
}
