import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layout/RegisterLayout/'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import Restaurants from './pages/Restaurants'
//import Test from './../src/Test.jsx'
import CreateMenu from './pages/CreateMenu'
import ShowMenuPage from './pages/ShowMenuPage'
import { useParams } from 'react-router-dom'
import Info from './pages/Info/Info.jsx'

//Just for testing
import Test from './pages/Test/Test.jsx'

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
      path: '/test',
      element: (
          <Test/>
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
      path: '/info',
      element: (
        <MainLayout>
          <Info />
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
      element: <Login />
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
    },
    {
      path: '/menu/:id',
      element: (
        <MainLayout>
          <ShowMenuPage params={useParams()} />
        </MainLayout>
      )
    }
  ])

  return routeElements
}
