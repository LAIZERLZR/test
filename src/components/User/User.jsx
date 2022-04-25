import React from "react";
import style from "./User.module.css";
import Info from "./Info";
import Password from "./Password";
import Email from "./Email";
import Button from "../Button/Button";

const User = () => {
  return (
    <div className={style.app}>
      <Info />
      <Password />
      <Email />
      <Button />
    </div>
  );
};

export default User;
