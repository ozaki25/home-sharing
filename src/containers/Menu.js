import React from 'react';
import Menu from 'components/pages/Menu';
import useReactRouter from 'use-react-router';
import useFirebase from 'hooks/useFirebase';
import useAuthorization from 'hooks/useAuthorization';

function MenuContainer() {
  useAuthorization();
  const { history } = useReactRouter();
  const firebase = useFirebase();
  return <Menu history={history} firebase={firebase} />;
}

export default MenuContainer;
