import React from "react";
import style from "./header.module.css";
import logo from "../../Assets/logoTransparente.png"

export default function Header(props) {
  return (
    <div className={style.div} >
      <div className={style.header}>
        <img className={style.logo} src={logo} alt="Logo" />
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
