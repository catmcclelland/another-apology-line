import React from "react";
import { provider } from "../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
export default function Login() {
  const auth = getAuth();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((re) => console.log(re))
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      {/* <LoginWrapper className="login"> */}
      <Card>
        <Text>
          <Swiper
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
          <GoogleSignIn onClick={signIn}>
            <Icon>
              <FcGoogle />
            </Icon>
            Sign In with Google
          </GoogleSignIn>
          <Continue>Continue without Login</Continue>
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
const GoogleSignIn = styled.div`
  width: 80%;
  max-width: 20rem;
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
  max-width: 20rem;
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
  justify-content: flex-end;
`;
