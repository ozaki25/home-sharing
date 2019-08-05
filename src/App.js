import React from 'react';
import Router from 'router';
import Firebase from 'utils/firebase';
import FirebaseContext from 'context/firebase';
import { withAuthentication } from 'hoc/sessions';

const AuthRouter = withAuthentication(Router);

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <AuthRouter />
    </FirebaseContext.Provider>
  );
}

export default App;
