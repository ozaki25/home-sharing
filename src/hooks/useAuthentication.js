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
    const onChange = ({ displayName, uid }) => {
      localStorage.setItem('authUser', JSON.stringify({ displayName, uid }));
      setAuthUser({ displayName, uid });
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
