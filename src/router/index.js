import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from 'constants/routes';
import ScrollToTop from 'router/ScrollToTop';
import Signin from 'containers/Signin';
import Signup from 'containers/Signup';
import Menu from 'containers/Menu';
import AccountSetting from 'containers/AccountSetting';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <ScrollToTop />
          <Route path={ROUTES.Signin} exact component={Signin} />
          <Route path={ROUTES.Signup} exact component={Signup} />
          <Route path={ROUTES.Menu} exact component={Menu} />
          <Route
            path={ROUTES.AccountSetting}
            exact
            component={AccountSetting}
          />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
