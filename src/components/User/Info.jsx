import React from "react";
import style from "./User.module.css";

const Info = () => {
  return (
    <div className={style.info}>
      <div className={style.info__container}>
        <div>
          <span>Ваш город</span>
          <select>
            <option>Красноярск</option>
            <option>Option</option>
            <option>Textarea</option>
            <option>Label</option>
            <option>Fieldset</option>
            <option>Legend</option>
          </select>
        </div>
        <div>
          <span>Ваш университет</span>
          <select>
            <option>Хогвартс</option>
            <option>Option</option>
            <option>Textarea</option>
            <option>Label</option>
            <option>Fieldset</option>
            <option>Legend</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Info;
