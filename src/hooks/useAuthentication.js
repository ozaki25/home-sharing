import { useEffect } from 'react';
import useFirebase from 'hooks/useFirebase';
import useAuthUser from 'hooks/useAuthUser';

function useAuthentication() {
  const firebase = useFirebase();
  const { setAuthUser } = useAuthUser();

  useEffect(() => {
    const user = localStorage.getItem('authUser');
    if (user) setAuthUser(JSON.parse(user));
  }, [setAuthUser]);

  useEffect(() => {
    const onChange = user => {
      localStorage.setItem('authUser', JSON.stringify(user));
      setAuthUser(user);
    };
    const onError = () => {
      localStorage.removeItem('authUser');
      setAuthUser(null);
    };
    const unsubscribe = firebase.onAuthStateChanged(onChange, onError);
    return () => unsubscribe();
  }, [firebase, setAuthUser]);

  return null;
}

export default useAuthentication;
