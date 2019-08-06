import React from 'react';
import useReactRouter from 'use-react-router';
import Signin from 'components/pages/Signin';
import useFirebase from 'hooks/useFirebase';

function SigninContainer() {
  const { history } = useReactRouter();
  const firebase = useFirebase();
  return <Signin history={history} firebase={firebase} />;
}

export default SigninContainer;
