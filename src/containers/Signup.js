import React from 'react';
import Signup from 'components/pages/Signup';
import useReactRouter from 'use-react-router';
import { useFirebase } from 'hooks/useFirebase';

function SignupContainer() {
  const { history } = useReactRouter();
  const firebase = useFirebase();
  return <Signup history={history} firebase={firebase} />;
}

export default SignupContainer;
