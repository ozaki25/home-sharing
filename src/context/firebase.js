import React, { createContext } from 'react';
import Firebase from 'utils/firebase';

export const FirebaseContext = createContext(null);

const FirebaseProvider = function(props) {
  return <FirebaseContext.Provider value={new Firebase()} {...props} />;
};

export default FirebaseProvider;
