import React from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { about, projects, experiences, contact } from 'shared';

const MENU = [about, projects, experiences, contact];

const NavText = styled.span`
  color: ${(props) => props.theme.colors.secondaryText};
  &: hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

export default function Navigation() {
  const showActiveMenu = (isActive: boolean) => (isActive ? 'font-bold' : '');

  return (
    <div>
      {MENU.map((el) => (
        <NavLink
          to={el.path}
          key={el.title}
          className={({ isActive }) => {
            return `${showActiveMenu(
              isActive
            )} cursor-pointer mx-2.5 transition delay-100 duration-200 ease-in-out text-sm `;
          }}
        >
          <NavText>{el.title}</NavText>
        </NavLink>
      ))}
    </div>
  );
}
