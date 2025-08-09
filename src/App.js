// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Sample Pages
const Home = () => <h2>Welcome to the Secure Digital Locker</h2>;
const About = () => <h2>About This Project</h2>;
const Login = () => (
  <div>
    <h2>Login</h2>
    <form>
      <input type="email" placeholder="Email" required />
      <br />
      <input type="password" placeholder="Password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <h1>Secure Digital Locker</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/login">Login</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
