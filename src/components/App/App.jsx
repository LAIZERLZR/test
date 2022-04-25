import Header from "../Header/Header";
import User from "../User/User";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <User/>
    </div>
  );
}

export default App;
