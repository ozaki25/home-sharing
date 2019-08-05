import React from 'react';
import Signup from 'components/pages/Signup';
import useReactRouter from 'use-react-router';

function SignupContainer() {
  const { history } = useReactRouter();
  return <Signup history={history} />;
}

export default SignupContainer;
