import React from 'react';

import { NavLink } from 'react-router-dom';
import { about, projects, experiences, contact } from 'shared';

const MENU = [about, projects, experiences, contact];

export default function Navigation() {
  const showActiveMenu = (isActive: boolean) =>
    isActive ? 'text-pink-500' : '';

  return (
    <div>
      {MENU.map((el) => (
        <NavLink
          to={el.path}
          key={el.title}
          className={({ isActive }) => {
            return `${showActiveMenu(
              isActive
            )} cursor-pointer mx-2.5 transition delay-100 duration-200 ease-in-out  hover:text-pink-400 text-sm `;
          }}
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
}
