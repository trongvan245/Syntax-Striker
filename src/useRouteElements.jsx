import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layout/RegisterLayout/'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import Restaurants from './pages/Restaurants'
import Test from './../src/Test.jsx'
import CreateMenu from './pages/CreateMenu'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: (
        <MainLayout>
          <LandingPage />
        </MainLayout>
      )
    },
    {
      path: '/createMenu',
      element: (
        <MainLayout>
          <CreateMenu />
        </MainLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/restaurants',
      element: (
        <MainLayout>
          <Restaurants />
        </MainLayout>
      )
    },
    {
      path: '/test',
      element: (
        <MainLayout>
          <Test />
        </MainLayout>
      )
    }
  ])

  return routeElements
}
