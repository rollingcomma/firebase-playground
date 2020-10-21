import React, { useContext } from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

import {
  auth,
  firestore
} from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  EmailSignIn,
  SignIn,
  SignOut
} from './components/SignIn';
import SignUp from './components/SignUp';
import RoomList from './components/RoomList';
import AddRoom from './components/AddRoom';
import ChatRoom from './components/ChatRoom';
import Profile from './components/Profile';
import UserProvider, {UserContext} from './providers/UserProvider';

const IndexPage = () => {

  // let location = useLocation();
  // const [user] = useAuthState(auth);
  // {/* <EmailSignIn /> */ }
  return (
    <div className="App">
    
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/logout" >
          <SignOut />
        </Route>
        <SecureRoute path="/profile">
          <Profile />
        </SecureRoute>
        {/* <SecureRoute path="/roomlist">
        <RoomList />
      </SecureRoute>
      <SecureRoute path="/addroom">
        <AddRoom />
      </SecureRoute>
      <SecureRoute path="/chatroom/:room">
        <ChatRoom />
      </SecureRoute> */}
      </Switch>
    </Router>

    </div>
  );
}


export default IndexPage;

function SecureRoute({ children, ...rest }) {
  const user = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login"
                // state: { from: location }
              }}
            />
          )
      }
    />
  );
}