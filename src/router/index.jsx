import {createBrowserRouter} from 'react-router-dom'

//import Root from '../layout/Root'
import Home from '../pages/Home'
//import NotFound from '../pages/NotFound'
//import PrivateRoute from '../components/PrivateRoute'
import Login from '../components/Login';
import Verify from '../pages/verify'
// import RegisterPage from '../pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />
      },
      // {
      //   path: '/register',
      //   element: <RegisterPage/>
      // },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/verify-account/:token',
        element: <Verify />
      }
    ]
  },
])

export default router