import React from "react";
import style from "./User.module.css";

const Email = () => {
  return (
    <div className={style.info__email}>
      <div className={style.email__container}>
        <div className={style.email__form}>
          <div className={style.pass__box}>
            <p>Элетронная почта</p>
            <label>
              <input className={style.email__input} type="text" />
            </label>
          </div>
          <span className={style.email}>
            Можно изменить адрес указанный при регистрации
          </span>
        </div>
        <div className={style.email__form}>
          <div className={style.email__box}>
            <p>Я согласен</p>
            <div>
              <label>
                <input className={style.checkbox} type="checkbox" />
              </label>
              <span>Принимать актуальную информацию на email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
