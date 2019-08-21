import { useEffect } from 'react';
import useReactRouter from 'use-react-router';
import useFirebase from 'hooks/useFirebase';
import ROUTES from 'constants/routes';

function useAuthorization() {
  const firebase = useFirebase();
  const { history } = useReactRouter();

  useEffect(() => {
    const onChange = user => console.log({ user });
    const onError = () => history.push(ROUTES.Signin);
    const unsubscribe = firebase.onAuthStateChanged(onChange, onError);
    return () => unsubscribe();
  }, [firebase, history]);

  return null;
}

export default useAuthorization;
