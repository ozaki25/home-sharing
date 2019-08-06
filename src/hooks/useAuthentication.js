import { useEffect } from 'react';
import useFirebase from 'hooks/useFirebase';
import useAuthUser from 'hooks/useAuthUser';

function useAuthentication() {
  const firebase = useFirebase();
  const { authUser, setAuthUser } = useAuthUser();

  useEffect(() => {
    const user = localStorage.getItem('authUser');
    console.log({ user });
    if (user) setAuthUser(user);
  });

  useEffect(() => {
    const listener = firebase.onAuthUserListener(
      user => {
        console.log({ user });
        if (authUser) return;
        localStorage.setItem('authUser', JSON.stringify(user));
        setAuthUser(user);
      },
      () => {
        localStorage.removeItem('authUser');
        setAuthUser(null);
      },
    );
    return () => listener();
  }, [firebase, authUser, setAuthUser]);

  return null;
}

export default useAuthentication;
