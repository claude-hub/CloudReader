import React from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import Layout from './components/layout';

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
      <Layout>
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
      </Layout>
    </ConnectedRouter>
  );
};

export default Routers;
