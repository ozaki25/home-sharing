import React from 'react';
import Router from 'router';
import FirebaseProvider from 'hooks/useFirebase';
import useAuthentication from 'hooks/useAuthentication';

function AppRouter() {
  useAuthentication();
  return <Router />;
}

function App() {
  return (
    <FirebaseProvider>
      <AppRouter />
    </FirebaseProvider>
  );
}

export default App;
