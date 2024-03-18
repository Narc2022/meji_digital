import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchUsers } from "./Api/User";
import { useEffect, useState } from "react";
import DetailsPage from "./Components/DetailsPage";
import Cards from "./Components/Cards";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setData(users);
        console.log("users", users);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/users/:id" element={<DetailsPage />} />
        <Route path="/" element={<Cards data={data} />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
