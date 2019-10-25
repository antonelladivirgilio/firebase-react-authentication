import React from "react";

// Firebase
import firebase from "../../initializers";

// Material UI
import { Button } from "@material-ui/core";

const Login = () => {
  const handle_login = () => {
    console.log("handle_login");

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/photoslibrary.readonly");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(response => {
        console.log("RESPONSE FIREBASE", response.credential);
      })
      .catch(error => {
        console.log("no concedio los permisos");
      });
  };

  return (
    <>
      <Button variant="contained" onClick={handle_login}>
        Default
      </Button>
    </>
  );
};

export default Login;
