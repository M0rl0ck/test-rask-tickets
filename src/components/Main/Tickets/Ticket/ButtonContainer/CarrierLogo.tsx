import Styles from "./buttonContainer.module.css";
import type { LogoName } from "../../../../../types";

interface CarrierLogoProps {
  logoName: LogoName;
}

function CarrierLogo({ logoName }: CarrierLogoProps) {
  let scrImage = "";
  switch (logoName) {
    case "SU":
      scrImage = "./aeroflot-logo.jpg";
      break;
    case "S7":
      scrImage = "./s7-logo.png";
      break;
    case "BA":
      scrImage = "./britishAir-logo.jpg";
      break;
    case "TK":
      scrImage = "./turkish-logo.png";
      break;
    default:
      scrImage = "./turkish-logo.png";
  }
  return <img src={scrImage} alt={logoName} className={Styles.carrierLogo} />;
}

export { CarrierLogo };
