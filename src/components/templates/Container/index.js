import React from 'react';
import NavigationBar from 'components/organisms/NavigationBar';

function Container({
  children,
  title,
  back,
  noHeader,
  noPadding,
  authUser,
  history,
  firebase,
}) {
  return (
    <>
      {noHeader || (
        <NavigationBar
          title={title}
          authUser={authUser}
          history={history}
          firebase={firebase}
          back={back}
        />
      )}
      <div style={{ padding: noPadding ? 'inherit' : '5px 10px' }}>
        {children}
      </div>
    </>
  );
}

export default Container;
