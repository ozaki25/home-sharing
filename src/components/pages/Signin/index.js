import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GoogleButton from 'components/atoms/GoogleButton';
import SigninForm from 'components/organisms/SigninForm';
import Container from 'components/templates/Container';
import ROUTES from 'constants/routes';

const styles = {
  nonCaps: {
    textTransform: 'none',
  },
};

function Signin({ history, firebase, classes }) {
  console.log({ history, firebase, classes });
  const signin = async ({ data: { email, pass } }) => {
    await firebase.doSignInWithEmailAndPassword(email, pass);
    history.replace(ROUTES.Menu);
  };

  const signinWithGoogle = async () => {
    try {
      sessionStorage.setItem('willRedirect', 'true');
      firebase.doSignInWithGoogle();
    } catch (e) {
      console.log(e);
    }
  };

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
    </Container>
  );
}

export default withStyles(styles)(Signin);
