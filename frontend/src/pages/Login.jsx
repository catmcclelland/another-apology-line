// import React from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// function Login() {
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
//   return <button>Login</button>;
// }

// export default Login;
import React from "react";
// import "./Login.css";
// import Button from "@mui/material/Button";
import { provider } from "../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";

export default function Login() {
  const auth = getAuth();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((re) => console.log(re))
      .catch((e) => console.log(e.message));
  };
  return (
    <div className="login">
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}
