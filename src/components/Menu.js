import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <nav>
    <ul className="menu">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/team"
          isActive={(match, location) => location.pathname.indexOf("team") > -1}
        >
          Equipe
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          isActive={(match, location) =>
            location.pathname.indexOf("project") > -1
          }
        >
          Projetos
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Menu;
