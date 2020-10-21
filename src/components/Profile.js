import React, { useContext } from 'react';
import { auth } from '../firebase';
import { UserContext } from '../providers/UserProvider';

const Profile = () => {
  const user = useContext(UserContext);
  debugger
  const { photoURL, displayName, email } = user.user;
  return (
    <div>
      <h1>Welcome, {displayName}</h1>
      <div>
        <img src={photoURL} />
      </div>
    </div>
  )
}

export default Profile;