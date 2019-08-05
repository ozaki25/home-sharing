import React from 'react';
import Signin from 'components/pages/Signin';
import useReactRouter from 'use-react-router';

function SigninContainer() {
  const { history } = useReactRouter();
  return <Signin history={history} />;
}

export default SigninContainer;
