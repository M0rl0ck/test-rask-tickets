import Style from "./description.module.css";
import Image from "../../../../../assets/airplane-small.png";

interface DividerProps {
  stops: number;
}

function Divider({ stops }: DividerProps) {
  return (
    <div className={Style.divider}>
      <div>
        {stops}{" "}
        {stops === 0 ? "пересадок" : stops === 1 ? "пересадка" : "пересадки"}
        <img src={Image} alt="plane" />
      </div>
    </div>
  );
}

export { Divider };
