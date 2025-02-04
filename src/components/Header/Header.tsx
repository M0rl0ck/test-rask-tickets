import logo from "../../assets/airplane.png";
import Styles from "./header.module.css";
function Header() {
  return (
    <header className={Styles.header}>
      <img src={logo} alt="logo" className={Styles.logo} />
    </header>
  );
}

export { Header };
