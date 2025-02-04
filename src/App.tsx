// import { useState } from 'react'
import Style from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={Style.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
