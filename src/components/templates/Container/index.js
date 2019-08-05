import React from 'react';
import NavigationBar from 'components/organisms/NavigationBar';

function Container({ children, title, back, noHeader, history }) {
  return (
    <>
      {noHeader || (
        <NavigationBar title={title} history={history} back={back} />
      )}
      <div>{children}</div>
    </>
  );
}

export default Container;
