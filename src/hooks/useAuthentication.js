import { useEffect } from 'react';
import { useFirebase } from 'hooks/useFirebase';

function useAuthentication() {
  const firebase = useFirebase();

  useEffect(() => {
    const listener = firebase.onAuthUserListener(
      async ({ uid, displayName }) => {
        console.log({ uid, displayName });
      },
      () => {
        localStorage.removeItem('authUser');
        // this.props.onSetAuthUser(null);
      },
    );
    return () => listener();
  }, [firebase]);

  return null;
}

export default useAuthentication;
