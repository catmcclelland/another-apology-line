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
import "swiper/css/bundle";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const logInLocal = window.localStorage.getItem("currentLoggedIn");
  return (
    <Container>
      <Router>
        <Routes>
          {!logInLocal ? (
            <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
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
  height: 100vh;
  margin: auto;
  background-color: black;
  justify-content: center;
`;

export default App;
