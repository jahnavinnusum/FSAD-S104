import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 React App Deployed via GitHub Pages</h1>
        <p>This app is successfully deployed from the <strong>main</strong> branch to the <strong>gh-pages</strong> branch using GitHub Actions.</p>
        
        <div style={{ margin: "20px 0" }}>
          <a
            className="App-link"
            href="https://jahnavinnusum.github.io/FSAD-S104/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Visit Live Site
          </a>
        </div>

        <div>
          <a
            className="App-link"
            href="https://github.com/jahnavinnusum/FSAD-S104"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 View Source on GitHub
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
