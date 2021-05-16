import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("/api/users")
      .then((users) => setUsers(users))
      .catch((err) => console.error(err));
  }, []);

  function sumbitForm() {
    if (username === "") {
      alert("Please fill the username field");
      return;
    }
    if (email === "") {
      alert("Please fill the email field");
      return;
    }
    axios
      .post("/api/users", {
        username: username,
        email: email,
      })
      .then(() => {
        alert("Window created successfully");
        window.location.reload();
      })
      .catch(alert("Could not create account. Please try again"));
  }

  return (
    <>
      <h1>My Project</h1>
      {users === null ? (
        <p>Loading</p>
      ) : users.length === 0 ? (
        <p> No users available</p>
      ) : (
        <>
          <h2>Available Users</h2>
          <ol>
            {" "}
            {users.map((user, index) => (
              <li key={index}>
                {" "}
                Name: {user.name} - Email: {user.email}{" "}
              </li>
            ))}{" "}
          </ol>
        </>
      )}
      <form onSubmit={sumbitForm}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your Username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your Email"
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
