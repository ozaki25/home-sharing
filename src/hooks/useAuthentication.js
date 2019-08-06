import { useEffect } from 'react';
import useFirebase from 'hooks/useFirebase';
import useAuthUser from 'hooks/useAuthUser';

function useAuthentication() {
  const firebase = useFirebase();
  const { authUser, setAuthUser } = useAuthUser();

  useEffect(() => {
    const user = localStorage.getItem('authUser');
    if (user) setAuthUser(user);
  }, [setAuthUser]);

  useEffect(() => {
    const listener = firebase.onAuthUserListener(
      user => {
        if (authUser) return;
        localStorage.setItem('authUser', JSON.stringify(user));
        setAuthUser(user);
      },
      () => {
        // localStorage.removeItem('authUser');
        // setAuthUser(null);
      },
    );
    return () => listener();
  }, [firebase, authUser, setAuthUser]);

  return null;
}

export default useAuthentication;
