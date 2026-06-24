import React, { useState, useEffect } from "react";

function App() {

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error State
  const [errors, setErrors] = useState({});

  // Success Message
  const [success, setSuccess] = useState("");

  // API Data State
  const [users, setUsers] = useState([]);

  // useEffect for API Fetching
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });

  }, []);

  // Form Validation
  const validateForm = () => {

    let newErrors = {};

    if (name === "") {
      newErrors.name = "Name is required";
    }

    if (email === "") {
      newErrors.email = "Email is required";
    }

    if (password === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Form Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      setSuccess("Registration Successful!");

      setName("");
      setEmail("");
      setPassword("");

      setErrors({});
    }
  };

  return (

    <div
      style={{
        width: "500px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >

      <h1 style={{ textAlign: "center" }}>
        Registration Form with API Fetching
      </h1>

      {/* Registration Form */}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <p style={{ color: "red" }}>{errors.name}</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <p style={{ color: "red" }}>{errors.password}</p>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            marginTop: "10px"
          }}
        >
          Register
        </button>

      </form>

      <h3 style={{ color: "green" }}>{success}</h3>

      {/* API Data */}

      <h2>Fetched API Data</h2>

      <ul>

        {users.map((user) => (

          <li key={user.id}>
            {user.name}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;