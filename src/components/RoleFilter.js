import React from "react";

const RoleFilter = ({ roles, active, onChange }) => {
  return (
    <ul id="role-filter">
      {roles.map((role) => {
        const isActive = role === active;
        return (
          <li
            className={isActive ? "active" : ""}
            key={`role_filter_${role}`}
            onClick={() => onChange(role)}
          >
            {role}
          </li>
        );
      })}
    </ul>
  );
};

export default RoleFilter;
