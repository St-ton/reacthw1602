import React, { useState } from "react";
import UserForm from "../UserForm/UserForm";
import UsersList from "../UsersList/UsersList";
import Footer from "../Footer/Footer";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  return (
    <div className="App">
      <h1>Male and Female Users:</h1>
      <UserForm onAddUser={handleAddUser} />
      <h5>Если ссылка на аватар не указана, то выводится шаблонное фото:</h5>
      <UsersList users={users} gender="male" />
      <UsersList users={users} gender="female" />
      <Footer />
    </div>
  );
}
