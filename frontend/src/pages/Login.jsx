import React from "react";
import { provider } from "../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import PaginatedSwiper from "../components/PaginatedSwiper";
import { Navigate } from "react-router-dom";

export default function Login(props) {
  const auth = getAuth();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((re) => {
        props.setLoggedIn(true);
        window.localStorage.setItem("currentLoggedIn", re.user.uid);
      })
      .catch((e) => console.log(e.message));
  };
  const continueWithoutLogin = () => {
    window.localStorage.setItem("currentLoggedIn", true);
    props.setLoggedIn(true);
  };
  return (
    <div>
      {/* <LoginWrapper className="login"> */}
      <Card>
        <Text>
          <Carousel>
            <PaginatedSwiper />
          </Carousel>
          <Box>
            <GoogleSignIn onClick={signIn}>
              <Icon>
                <FcGoogle />
              </Icon>
              Sign In with Google
            </GoogleSignIn>
            <Continue onClick={continueWithoutLogin}>
              Continue without Login
            </Continue>
          </Box>
        </Text>
      </Card>
      {/* </LoginWrapper> */}
    </div>
  );
}
// const LoginWrapper = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   margin: auto;
//   background-color: white;
//   justify-content: center;
//   align-items: center;
// `;
const Carousel = styled.div`
  width: 95%;
  height: 80%;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GoogleSignIn = styled.div`
  width: 80%;
  min-width: 15rem;
  height: 3rem;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 30px;
  text-align: center;
  background: white;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
const Continue = styled.div`
  background: white;
  width: 80%;
  min-width: 15rem;
  height: 3rem;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 30px;
  text-align: center;

  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const Icon = styled.div`
  margin-right: 1rem;
  margin-bottom: -0.25rem;
  display: inline;
`;
const Card = styled.div`
  background: snow;
  border-radius: 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Text = styled.div`
  background: gainsboro;
  border-radius: 20px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;
const Box = styled.div`
  bottom: 0;
`;
