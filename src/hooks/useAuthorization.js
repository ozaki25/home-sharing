import { useEffect } from 'react';
import useReactRouter from 'use-react-router';
import { useFirebase } from 'hooks/useFirebase';
import ROUTES from 'constants/routes';

function useAuthorization({ authUser } = {}) {
  const firebase = useFirebase();
  const { history } = useReactRouter();

  useEffect(() => {
    const listener = firebase.onAuthUserListener(
      user => !user && history.push(ROUTES.Signin),
      () => {
        if (!authUser) history.push(ROUTES.Signin);
      },
    );
    return () => listener();
  }, [firebase, history, authUser]);

  return null;
}

export default useAuthorization;
