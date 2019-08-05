import React from 'react';
import NavigationBar from 'components/organisms/NavigationBar';

function Container({ children, title, history }) {
  return (
    <>
      <NavigationBar title={title} history={history} />
      <div>{children}</div>
    </>
  );
}

export default Container;
