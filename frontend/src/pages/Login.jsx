import React from "react";
import { provider } from "../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsArrowRight } from 'react-icons/bs'
import Marquee from "../components/Marquee";
import { useNavigate } from "react-router-dom";

export default function Login({ setLoggedIn }) {
  
  const navigate = useNavigate()
  const auth = getAuth();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
        setLoggedIn(true);
        window.localStorage.setItem("currentLoggedIn", re.user.uid);
      })
      .catch((e) => console.log(e.message));
  };
  const continueWithoutLogin = () => {
    navigate('/player')
    window.localStorage.setItem("currentLoggedIn", true);
    setLoggedIn(true);
  };
  return (
    <div>
        <Fixed>
            <Container>
              <Content>
                <Sorry>SORRY?</Sorry>
                <Criminals>CRIMINALS,</Criminals>
                <Riffraff>RUFFIANS AND RIFFRAFF:</Riffraff>
                <Marquee />
                <Goals>
                  <i>
                    the goal of this app is to provide a way for people to
                    apologize for their wrongs against fellow citizens
                    without jeopardizing themselves. your anonymous call
                    will be tape recorded— do not identify yourself and call from
                    a pay phone to prevent tracing. describe in detail what you
                    have done and how you feel about it. <b>these recordings
                    are collected and posted without moderation. your 
                    discretion is advised.
                    </b>
                  </i>
                </Goals>
                <Disclaimer>
                  <b>
                    i'm sorry is a private experiment, not associated with any police,
                    government, church, or organization. it is merely an open line
                    of communication between you and your fellow humans.
                  </b>
                </Disclaimer>
                <Phone>+1 (502) IM - SORRY</Phone>
                <Closer>when you call, you will be alone with a tape recorder.</Closer>
              </Content>
              
              <GoogleSignIn onClick={signIn}>
                <Icon>
                  <FcGoogle size="20px" />
                </Icon>
                Sign In with Google
              </GoogleSignIn>
              <Continue onClick={continueWithoutLogin}>
                Continue as Guest
              </Continue>
            </Container>
            </Fixed>
     
    </div>
  );
}

const Fixed = styled.div`
  position: fixed;
  left: 0px;`
const Container = styled.div`
  display: flex;
  background: salmon;
  height: 100vh;
  width: 100vw;
  flex-direction: column;`

const Content = styled.div`
  display: flex;
  height 90%;
  justify-content: center;
  align-items: center;`

const Sorry = styled.div`
  display: flex;
  position: absolute;
  font-size: 100px;
  letter-spacing: 5px;
  line-height: 95px;
  font-weight: 900;
  margin-bottom: -10px;
  border-bottom: 30px solid #222222;
  top: -10px;
  @media (max-height: 680px) {
    border: none;
  }`

const Criminals = styled.div`
  display: flex;
  position: absolute;
  font-size: 80px;
  letter-spacing: -10px;
  top: 100px;
  @media (max-height: 680px) {
    top: 50px;
  }`

const Riffraff = styled.div`
  display: flex;
  position: absolute;
  font-size: 30px;
  font-weight:900;
  letter-spacing: -3px;
  top: 180px;
  @media (max-height: 680px) {
    top: 120px;
  }`

const Goals = styled.div`
  display: flex;
  position: absolute;
  font-size: 18px;
  top: 230px;
  width: 350px;
  margin-top: 40px;
  text-align: justify;
  text-transform: uppercase;`

const Disclaimer = styled.div`
  display: flex;
  position: absolute;
  font-size: 22px;
  letter-spacing: -2px;
  top: 560px;
  width: 375px;
  margin-top: 40px;
  text-align: justify;
  text-transform: uppercase;
  @media (max-height: 700px) {
    display: none;
  }
  @media (max-height: 895px) {
    font-size: 18px;
    margin-top: 25px;
    letter-spacing: -2px;
    width: 360px;
  }
  @media (max-height: 800px) {
    display: none;
  }`

const Phone = styled.div`
  display: flex;
  position: absolute;
  font-size: 59px;
  letter-spacing: -8px;
  top: 485px;
  width: 375px;
  margin-top: 40px;
  text-align: justify;
  text-transform: uppercase;
  @media (max-height: 680px) {
    top: 110px;
  }`

const Closer = styled.div`
  display: flex;
  position: absolute;
  font-size: 15px;
  letter-spacing: -1px;
  top: 713px;
  width: 375px;
  margin-top: 60px;
  text-align: justify;
  text-transform: uppercase;
  @media (max-height: 800px) {
    display: none;
  }
  @media (max-height: 895px) {
    font-size: 13px;
    margin-top: -20px;
    margin-left: 20px;
  }
  @media (height: 844px) {
    font-size: 15px;
    margin-top: 0px;
    letter-spacing: -2px;
    width: 360px;
  }`

const GoogleSignIn = styled.div`
  display: flex;
  margin: auto;
  width: 300px;
  justify-content: center;
  color: white;
  background-color: #222222;
  padding: 15px;
  border-radius: 40px;
  margin-bottom: 0px;
  cursor: pointer;
  transition: .1s;
  &:hover {
    background: black;
    transition: .1s;
  }
  @media (max-height: 760px) {
    margin-bottom: 10px;
  }
`;

const Continue = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 0px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }`

const Icon = styled.div`
  margin-left: -40px;
  margin-right: 3rem;
  margin-bottom: -0.25rem;
  display: inline;
`;
