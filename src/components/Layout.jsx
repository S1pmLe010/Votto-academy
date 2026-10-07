import React from 'react';
import { useRoutes } from 'react-router-dom';

import Nav from './Nav';
import Votto from '../Ai/VottoAI.jsx';

import Dashboard from '../pages/Dashboard';
import Modules from '../pages/Modules';
import Module from '../pages/Module';
import Test from '../pages/Test';
import Rewards from '../pages/Rewards';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

function Layout() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/modules',
      element: <Modules />,
    },
    {
      path: '/modules/:id',
      element: <Module />,
    },
    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '/rewards',
      element: <Rewards />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <Nav />

      <main>
        {routes}
      </main>

      <Votto />
    </>
  );
}

export default Layout;