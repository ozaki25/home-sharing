import React from 'react';
import Container from 'components/templates/Container';

function Menu({ history, authUser }) {
  const { uid, displayName } = authUser || {};
  return (
    <Container title="メニュー" history={history}>
      <h1>Menu</h1>
      <p>
        {uid}: {displayName}
      </p>
    </Container>
  );
}

export default Menu;
