import React, { useEffect, useState } from "react";

// Firebase
import firebase from "../../initializers";

// Material UI
import { Button, Avatar } from "@material-ui/core";

const Login = () => {

  const [userLogged, setUserLogged] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');

  const handle_login = () => {
    console.log("handle_login");

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/photoslibrary.readonly");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(response => {
        const { accessToken } = response.credential;
        console.log("accessToken", accessToken);

      })
      .catch(error => {
        console.log("no concedio los permisos");
      });
  };

  const handle_logout = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log("user has changed", user);
      if(user){
        console.log('se logueo');
        setUserLogged(true);
        setUserAvatar(user.providerData[0].photoURL);
      } else {
        console.log(' no se logueo');
        setUserLogged(false);
        setUserAvatar('');
      }     
    })
  },[]);

  return (
    <>
    {
      userLogged ? (
        <Button variant="contained" onClick={handle_logout}>
          <Avatar src={userAvatar}/> Sign out
        </Button>
      ) : (
        <Button variant="contained" onClick={handle_login}>
          Sign in
        </Button>
      )
    }
      
    </>
  );
};

export default Login;
