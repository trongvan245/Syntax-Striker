import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layout/RegisterLayout/'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RegisterLayout />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> }
      ]
    },
    {
      path: '',
      element: <LandingPage />
    }
  ])

  return routeElements
}
