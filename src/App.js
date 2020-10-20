import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import firebase from './Firebase';
// import { auth } from 'firebase';
import 'firebase/firestore';
// import 'firbase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { 
  SignIn, 
  SignOut 
} from './components/SignIn';
import RoomList from './components/RoomList';
import AddRoom from './components/AddRoom';
import ChatRoom from './components/ChatRoom';

const config = {
  apiKey: "AIzaSyBRrrYr1bgq3rG1JwTjqoblHTO6b-Q5fdc",
  authDomain: "live-chat-c8d7b.firebaseapp.com",
  databaseURL: "https://live-chat-c8d7b.firebaseio.com",
  projectId: "live-chat-c8d7b",
  storageBucket: "live-chat-c8d7b.appspot.com",
  messagingSenderId: "712878854090",
  appId: "1:712878854090:web:8a20db271a9a3dcc15c933"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  let location = useLocation();

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <div>
          <header className="App-header">
            <h1>Chatrooms Playground</h1>
            <SignOut />
          </header>
          <Redirect
            to={{
              pathname: "/roomlist",
              state: { from: location }
            }}
          />
          <Switch>
            <Route path="/login">
              <SignIn />
            </Route>
            <SecureRoute path="/roomlist">
              <RoomList />
            </SecureRoute>
            <SecureRoute path="/addroom">
              <AddRoom />
            </SecureRoute>
            <SecureRoute path="/chatroom/:room">
              <ChatRoom />
            </SecureRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;

function SecureRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.currentUser ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}