import React from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';

const { ConnectedRouter } = routerRedux;

const Routers = ({ app, history }) => {
  const routes = [
    {
      path: '/',
      exact: true,
      // models: () => [import('./models/home')],
      component: () => import('./routes/home'),
    },
  ];

  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map(({ path, ...dynamics }) => (
          <Route
            key={path}
            exact
            path={path}
            component={dynamic({
              app,
              ...dynamics,
            })}
          />
        ))}
      </Switch>
    </ConnectedRouter>
  );
};

export default Routers;
