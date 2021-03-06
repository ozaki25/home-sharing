import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GoogleButton from 'components/atoms/GoogleButton';
import OverlaySpinner from 'components/molecules/OverlaySpinner';
import SigninForm from 'components/organisms/SigninForm';
import Container from 'components/templates/Container';
import ROUTES from 'constants/routes';

const styles = {
  nonCaps: {
    textTransform: 'none',
  },
};

function Signin({ history, firebase, classes }) {
  const [loading, setLoading] = useState(false);

  const signin = async ({ data: { email, pass } }) => {
    try {
      await firebase.doSignInWithEmailAndPassword(email, pass);
      history.replace(ROUTES.Menu);
    } catch (e) {
      console.log(e);
    }
  };

  const signinWithGoogle = async () => {
    try {
      sessionStorage.setItem('willRedirect', 'true');
      firebase.doSignInWithGoogle();
    } catch (e) {
      console.log(e);
    }
  };

  const redirectResult = async () => {
    setLoading(true);
    const result = await firebase.auth.getRedirectResult();
    setLoading(false);
    if (result.user) history.replace(ROUTES.Menu);
  };

  const checkRedirect = () => {
    const key = sessionStorage.getItem('willRedirect');
    if (key) {
      sessionStorage.removeItem('willRedirect');
      redirectResult();
    } else {
      firebase.doSignOut();
    }
  };

  useEffect(() => {
    checkRedirect();
  }, []);

  return (
    <Container history={history} firebase={firebase} noHeader>
      <SigninForm onSubmit={signin} />
      <div style={{ margin: '8px 0', textAlign: 'center' }}>
        <GoogleButton onClick={signinWithGoogle} />
      </div>
      <div style={{ margin: '8px 0', textAlign: 'center' }}>
        <Button component={Link} to={ROUTES.Signup} color="primary">
          新規登録
        </Button>
      </div>
      <OverlaySpinner visible={loading} />
    </Container>
  );
}

export default withStyles(styles)(Signin);
