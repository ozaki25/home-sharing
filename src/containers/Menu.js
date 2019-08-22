import React from 'react';
import useReactRouter from 'use-react-router';
import useFirebase from 'hooks/useFirebase';
import useAuthorization from 'hooks/useAuthorization';
import useAuthUser from 'hooks/useAuthUser';
import Menu from 'components/pages/Menu';
import OverlaySpinner from 'components/molecules/OverlaySpinner';

function MenuContainer() {
  useAuthorization();
  const { history } = useReactRouter();
  const firebase = useFirebase();
  const { authUser } = useAuthUser();
  return authUser ? (
    <Menu history={history} firebase={firebase} authUser={authUser} />
  ) : (
    <OverlaySpinner visible />
  );
}

export default MenuContainer;
