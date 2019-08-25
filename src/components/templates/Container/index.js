import React from 'react';
import NavigationBar from 'components/organisms/NavigationBar';
import { Container as MUIContainter } from '@material-ui/core';

function Container({
  children,
  title,
  back,
  noHeader,
  authUser,
  history,
  firebase,
}) {
  return (
    <MUIContainter maxWidth="md">
      {noHeader || (
        <NavigationBar
          title={title}
          authUser={authUser}
          history={history}
          firebase={firebase}
          back={back}
        />
      )}
      {children}
    </MUIContainter>
  );
}

export default Container;
