import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <h2>
          Здравствуйте, <b>Человек №3596941</b>
        </h2>
      </div>
      <div> 
        <span>Сменить статус</span>
      </div>
    </header>
  );
};

export default Header;
