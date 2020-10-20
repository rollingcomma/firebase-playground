import React, { useState } from 'react';
import firebase from 'firebase/app';
// import firebase from '../Firebase';
import { auth } from 'firebase';

// import 'firebase/firestore';
// import 'firbase/auth';

export const SignIn = () => {
  //const [nickname, setNickname] = useState('');
  const auth = firebase.auth();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithGoogle(provider);
    localStorage.setItem('nickname', auth.currentUser.displayName);
    //setNickname(auth.currentUser.displayName);
  }

  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebooAuthProvider();
    auth.signInWithFacebook(provider);
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
    </div>
  )
}

export const SignOut = () => {
  return auth.currentUser && (
    <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}