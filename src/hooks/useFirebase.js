import React, { createContext, useContext } from 'react';
import Firebase from 'utils/firebase';

const FirebaseContext = createContext(null);

const FirebaseProvider = function(props) {
  return <FirebaseContext.Provider value={new Firebase()} {...props} />;
};

export default FirebaseProvider;

export const useFirebase = () => useContext(FirebaseContext);
