import { Controls } from "./Controls";
import Style from "./main.module.css";
import { Tickets } from "./Tickets";

function Main() {
  return (
    <main className={Style.main}>
      <Controls />
      <Tickets />
    </main>
  );
}

export { Main };
