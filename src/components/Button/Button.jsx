import React from "react";
import style from "./Button.module.css";

const Button = () => {
  return (
    <div className={style.button__container}>
      <div>
        <button>Изменить</button>
        <span>Последние изменения 15 мая 2012 в 14:55:17</span>
      </div>
    </div>
  );
};

export default Button;
