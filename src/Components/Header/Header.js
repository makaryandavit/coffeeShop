import React from 'react'
import style from "./header.module.css";

import Logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.navigation}>
            <div className={style.naviagateLeft}>
                <img src={Logo} className={style.logo} alt="" />
            </div>
            <div className={style.naviagateRight}>
                <ul className={style.lists}>
                    <li>
                        <a href="" className={`${style.link1} ${style.link}`}>Главная</a>
                    </li>
                    <li>
                        <a href="" className={`${style.link2} ${style.link}`}>Наш товар</a>
                    </li>
                    <li>
                        <a href="" className={`${style.link3} ${style.link}`}>Получить прайс</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={style.btn}>
            <a href="">Получить оптовый прайс</a>
        </div>
    </div>
  )
}

export { Header }
