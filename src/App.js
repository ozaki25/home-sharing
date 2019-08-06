import React from 'react';
import Router from 'router';
import AuthUserProvider from 'context/authUser';
import FirebaseProvider from 'context/firebase';
import useAuthentication from 'hooks/useAuthentication';

function AppRouter() {
  useAuthentication();
  return <Router />;
}

function App() {
  return (
    <AuthUserProvider>
      <FirebaseProvider>
        <AppRouter />
      </FirebaseProvider>
    </AuthUserProvider>
  );
}

export default App;
