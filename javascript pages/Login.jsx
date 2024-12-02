import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 2D array storing users and passwords
  const users = [
    ["admin", "admin123"],
    ["user1", "password1"],
    ["user2", "password2"],
  ];

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Check if the entered username and password match an entry in the array os user/password pairs
    const isAuthenticated = users.some(
      ([storedUsername, storedPassword]) =>
        storedUsername === username && storedPassword === password
    );

    if (isAuthenticated) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }

    // Clear form fields
    setUsername("");
    setPassword("");
  };
}