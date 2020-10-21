import React, {useLocation} from 'react';
import IndexPage from './IndexPage';
import UserProvider from './providers/UserProvider';

function App() {

  return (
    <UserProvider>
      <IndexPage />
    </UserProvider>
  );
}


export default App;
