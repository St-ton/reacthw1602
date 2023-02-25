import React, { useState } from "react";
import "./UserForm.css";

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [avatarLink, setAvatarLink] = useState("");
  const [gender, setGender] = useState("male");
  // const defaultLink = "localhost:3005/avatar.jpg";

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddUser({ name, avatarLink, gender });
    setName("");
    setAvatarLink("");
    setGender("male");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name ..."
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="avatar-link"
          value={avatarLink}
          placeholder="Avatar Link ..."
          onChange={(e) => setAvatarLink(e.target.value)}
        />

        <select
          required=""
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Add USER</button>
      </form>
    </div>
  );
}
