import React from 'react';

import { NavLink } from 'react-router-dom';
import { about, projects, experiences, contact } from 'shared';
import { withTheme } from 'styled-components';

const MENU = [about, projects, experiences, contact];

export default function Navigation() {
  const showActiveMenu = (isActive: boolean) =>
    isActive ? 'text-pink-700' : 'text-neutral-600';

  console.log(withTheme);

  return (
    <div>
      {MENU.map((el) => (
        <NavLink
          to={el.path}
          key={el.title}
          className={({ isActive }) => {
            return `${showActiveMenu(
              isActive
            )} cursor-pointer mx-2.5 hover:text-gray-950 `;
          }}
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
}
