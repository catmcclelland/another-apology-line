import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {!loggedIn ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Main />} />
        )}
      </Routes>
      <div className="App">HELLO</div>
    </Router>
  );
}

export default App;
