import React, { useState } from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";
import getTeam from "../../data/team.js";

const team = Object.keys(getTeam);

const Team = () => (
  <>
    <DocumentTitle title="9Worphi - Equipe" />
    <ul className="team">
      {team.map((pessoa) => {
        const member = getTeam[pessoa];
        return (
          <li key={`team_${pessoa}`}>
            <div className="foto">
              <Link to={`/team/member/${pessoa}`}>
                <img src={member.photo} alt={member.name} title={member.name} />
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

export default Team;
