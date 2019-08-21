import React from 'react';
import Menu from 'components/pages/Menu';
import useReactRouter from 'use-react-router';
import useFirebase from 'hooks/useFirebase';
import useAuthorization from 'hooks/useAuthorization';
import useAuthUser from 'hooks/useAuthUser';

function MenuContainer() {
  useAuthorization();
  const { history } = useReactRouter();
  const firebase = useFirebase();
  const { authUser } = useAuthUser();
  return <Menu history={history} firebase={firebase} authUser={authUser} />;
}

export default MenuContainer;
