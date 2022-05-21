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
  const [data, setData] = useState([]);
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Recordings.json`,
        {
          auth: {
            username: TWILIO_ACCOUNT_SID,
            password: TWILIO_AUTH_TOKEN,
          },
        }
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);

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
