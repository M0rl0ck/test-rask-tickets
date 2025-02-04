import { LogoName } from "../../../../../types";
import Styles from "./buttonContainer.module.css";
import { CarrierLogo } from "./CarrierLogo";
import { ButtonBuy } from "./ButtonBuy";

interface ButtonContainerProps {
  logoName: LogoName;
  price: number;
}

function ButtonContainer({ logoName, price }: ButtonContainerProps) {
  return (
    <div className={Styles.container}>
      <CarrierLogo logoName={logoName} />
      <ButtonBuy price={price} />
    </div>
  );
}

export { ButtonContainer };
