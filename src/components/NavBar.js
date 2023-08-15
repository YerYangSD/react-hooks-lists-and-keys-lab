import React from "react";
import { v4 as uuidv4 } from 'uuid'
function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link) => {
    return <a key={uuidv4()} href={"#" + link}>{link}</a>;
  });

  return <nav>{linkElements}</nav>;
}

export default NavBar;
