import { useContext } from "react";
import { Context } from "../context";
import "./Nav.css";

const Nav = () => {
  const { darkMode, setDarkMode } = useContext(Context);

  return (
    <nav>
      <h1>Hexicon</h1>
      <span onClick={() => setDarkMode((curr) => !curr)}>{darkMode ? "☀︎" : "☽"}</span>
    </nav>
  )
}

export default Nav;
