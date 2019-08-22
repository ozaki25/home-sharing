import React from 'react';
import useReactRouter from 'use-react-router';
import useFirebase from 'hooks/useFirebase';
import useAuthorization from 'hooks/useAuthorization';
import useAuthUser from 'hooks/useAuthUser';
import AccountSetting from 'components/pages/AccountSetting';
import OverlaySpinner from 'components/molecules/OverlaySpinner';

function AccountSettingContainer() {
  useAuthorization();
  const { history } = useReactRouter();
  const firebase = useFirebase();
  const { authUser, setAuthUser } = useAuthUser();
  return authUser ? (
    <AccountSetting
      history={history}
      firebase={firebase}
      authUser={authUser}
      setAuthUser={setAuthUser}
    />
  ) : (
    <OverlaySpinner visible />
  );
}

export default AccountSettingContainer;
