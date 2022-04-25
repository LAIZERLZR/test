import React from "react";
import style from "./User.module.css";

const Password = () => {
  return (
    <div className={style.info}>
      <div className={style.password__container}>
        <div className={style.password__form}>
          <div className={style.pass__box}>
            <p>Пароль </p>
            <label>
              <input type="password" />
            </label>
          </div>
          <span>Ваш пароль должен содержать не менее 5 символов</span>
        </div>
        <div className={style.password__form}>
          <div className={style.pass__box}>
            <p>Пароль еще раз</p>
            <label>
              <input type="password" />
            </label>
          </div>
          <span>
            Повторите пароль, пожалуйста, это обезопасит вас с<br /> нами на
            случай ошибки
          </span>
        </div>
      </div>
    </div>
  );
};

export default Password;
