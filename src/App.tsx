// src/App.tsx
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Economics from "./pages/Econ";
import Trading from "./pages/Trading";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <div className="text-center space-y-8">
                <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
                <ul className="list-none space-y-6">
                  <li>
                    <Link
                      to="/economics"
                      className="text-blue-500 hover:underline"
                    >
                      Economics
                    </Link>
                    <ul className="list-none pl-4 mt-2 space-y-2">
                      <li>
                        <a
                          href="#subsection1"
                          className="text-blue-400 no-underline"
                        >
                          Singapore
                        </a>
                      </li>
                      <li>
                        <a
                          href="#subsection2"
                          className="text-blue-400 no-underline"
                        >
                          United States
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/trading"
                      className="text-blue-500 hover:underline"
                    >
                      Trading
                    </Link>
                    <ul className="list-none pl-4 mt-2 space-y-2">
                      <li>
                        <a
                          href="#subsection2.1"
                          className="text-blue-400 no-underline"
                        >
                          Building a Limit Order Book in Golang(idk Go)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#subsection2.2"
                          className="text-blue-400 no-underline"
                        >
                          Some notes on Arrival Price Algorithm
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <Route path="/economics" element={<Economics />} />
        <Route path="/trading" element={<Trading />} />
      </Routes>
    </Router>
  );
}

export default App;
