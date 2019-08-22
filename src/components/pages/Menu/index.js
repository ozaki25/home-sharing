import React from 'react';
import Container from 'components/templates/Container';

function Menu({ history, firebase, authUser }) {
  return (
    <Container
      title="ホーム"
      history={history}
      firebase={firebase}
      authUser={authUser}
    >
      <p>Hello {authUser.displayName} !</p>
    </Container>
  );
}

export default Menu;
