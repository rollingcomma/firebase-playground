
import React, { createContext, useState, useReducer, useEffect } from 'react';
import { auth } from '../firebase';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [userState, setUserState ] = useState(null);
  // const [user, dispatch] = useReducer(userState);

  useEffect(
    ()=>{
      auth.onAuthStateChanged(user => {
        setUserState({ user });
      })
    }
  )

  return (
    <UserContext.Provider value={userState} >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;