import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Menu() {
    return (
      <header>
        <nav className="menu">
            <NavLink to="/"  className={({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item"}>Главная</NavLink>
            <NavLink to="/drift" className={({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item"}>Дрифт-такси</NavLink>
            <NavLink to="/timeattack" className={({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item"}>Time attack</NavLink>
            <NavLink to="/forza" className={({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item"}>Forza Karting</NavLink>
        </nav>
      </header>
    );
};