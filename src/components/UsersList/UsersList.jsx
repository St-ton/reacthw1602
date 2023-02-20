import React from "react";
import "./UsersList.css";

export default function UsersList({ users, gender }) {
  const filteredUsers = users.filter((user) => user.gender === gender);
  const defaultLink = "./avatar.jpg";

  return (
    <div className="users-container">
      <h3 className="titel">
        {gender === "male" ? "Male Users" : "Female Users"}
      </h3>
      {filteredUsers.map((user) => (
        <div className="users_card" key={user.id}>
          <img
            src={user.avatarLink === "" ? defaultLink : user.avatarLink}
            alt={user.name}
          />
          <p>{user.name}</p>
          {console.log(user.avatarLink)}
        </div>
      ))}
    </div>
  );
}
