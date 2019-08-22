import React from 'react';
import NavigationBar from 'components/organisms/NavigationBar';

function Container({ children, title, back, noHeader, noPadding, history }) {
  return (
    <>
      {noHeader || (
        <NavigationBar title={title} history={history} back={back} />
      )}
      <div style={{ padding: noPadding ? 'inherit' : '5px 10px' }}>
        {children}
      </div>
    </>
  );
}

export default Container;
