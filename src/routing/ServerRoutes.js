/*
  serverRoutes.js

  Used instead of <Route> in `react-router-config` on the server.
  Compatible with `react-router-redux`'s `<ConnectedRouter>`
*/

import Base from '../containers/App.js';

import Home from '../containers/Home/Home.js';
import Roadtrip from '../containers/Roadtrip/Roadtrip.js';

// Fairly straightforward object nesting, should mirror `<BaseRoute>`
// structure in /src/routing/BaseRoutes.js
const routes = [
  {
    component: Base,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/roadtrip',
        component: Roadtrip,
      },
    ],
  },
];

export default routes;
