import {createBrowserRouter} from 'react-router-dom'

import Root from '../layout/Root';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../components/Login';
import Verify from '../components/verify';
import Register from '../components/Register';
import ConfirmedAccount from '../pages/ConfirmedAccount';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/home',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        )
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/confirmed-account',
        element: <ConfirmedAccount />
      },
      {
        path: '/verify-account/:token',
        element: <Verify />
      }
    ]
  },
])

export default router