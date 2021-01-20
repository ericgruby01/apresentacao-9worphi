import React, { useState } from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";
import getTeam from "../../data/team.js";

import RoleFilter from "../../components/RoleFilter";

const team = Object.keys(getTeam);

const TODOS = "Todos";

const roles = Object.values(getTeam).reduce(
  (arr, item) => {
    if (arr.indexOf(item.role) < 0) {
      arr.push(item.role);
    }
    return arr;
  },
  [TODOS]
);

const Team = () => {
  const [activeFilter, setActiveFilter] = useState(TODOS);

  return (
    <>
      <DocumentTitle title="NineWorphi - Equipe" />
      <RoleFilter
        roles={roles}
        active={activeFilter}
        onChange={setActiveFilter}
      />
      <ul className="team">
        {team.filter(pessoa => {
          if (activeFilter === TODOS) return pessoa
          return getTeam[pessoa].role === activeFilter
        }).map((pessoa) => {
          const member = getTeam[pessoa];
          return (
            <li key={`team_${pessoa}`}>
              <div className="foto">
                <Link to={`/team/member/${pessoa}`}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    title={member.name}
                  />
                </Link>
              </div>
              <div className="name">
                <Link to={`/team/member/${pessoa}`}>{member.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Team;
