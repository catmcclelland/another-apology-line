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
import styled from "styled-components";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Container>
      <Router>
        <Routes>
          {!loggedIn ? (
            <Route path="/" element={<Login />} />
          ) : (
            <Route path="/" element={<Main />} />
          )}
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  background-color: black;
  justify-content: center;
`;

export default App;
