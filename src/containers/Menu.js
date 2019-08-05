import React from 'react';
import Menu from 'components/pages/Menu';
import useReactRouter from 'use-react-router';
import { withAuthorization } from 'hoc/sessions';

function MenuContainer() {
  const { history } = useReactRouter();
  return <Menu history={history} />;
}

export default withAuthorization(MenuContainer);
