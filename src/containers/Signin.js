import React from 'react';
import useReactRouter from 'use-react-router';
import Signin from 'components/pages/Signin';
import { withFirebase } from 'context/firebase';

function SigninContainer() {
  const { history } = useReactRouter();
  return <Signin history={history} />;
}

export default withFirebase(SigninContainer);
