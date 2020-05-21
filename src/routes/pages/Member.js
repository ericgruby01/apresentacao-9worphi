import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import DocumentTitle from "react-document-title";

/** team */
import team from "../../data/team";

const MemberComponent = () => {
  const { id } = useParams();

  const member = team[id];

  if (!member) {
    return <Redirect to="/team" />;
  }

  return (
    <div className="member">
      <DocumentTitle title={`9Worphi - ${member.name}`} />
      <div className="foto">
        <img src={member.photo} alt={member.name} />
      </div>
      <div className="infos">
        <div className="info">
          <h4><i className="fas fa-user fa-fw"/> Nome</h4>
          <p>{member.name}</p>
        </div>
        <div className="info">
          <h4><i className="fas fa-mask fa-fw"/> Apelido</h4>
          <p>{member.nickname}</p>
        </div>
        <div className="info">
          <h4><i className="fas fa-briefcase fa-fw"/> Cargo</h4>
          <p>{member.business}</p>
        </div>
        <div className="info">
          <h4><i className="fas fa-laugh fa-fw"/> Interesses</h4>
          <ul className="interests">
            {member.interests.map((item, index) => (
              <li key={`team_interest_${item}_${index}_${id}`}>
                {item.label ? (
                  <Link to={`${item.link}`}>{item.label}</Link>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="info">
          <h4><i className="fas fa-mobile-alt fa-fw"/>Figurinha oficial</h4>
          <img src={member.sticker} class="sticker" />
        </div>
      </div>
    </div>
  );
};

export default MemberComponent;
