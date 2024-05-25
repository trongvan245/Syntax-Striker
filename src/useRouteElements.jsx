import { useRoutes } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import RegisterLayout from './layout/RegisterLayout/'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import Restaurants from './pages/Restaurants'
//import Test from './../src/Test.jsx'
import CreateMenu from './pages/CreateMenu'
import ShowMenuPage from './pages/ShowMenuPage'
// import { useParams } from 'react-router-dom'
import Info from './pages/Info/Info.jsx'
import Menu from './pages/Menu/Menu.jsx'

//Just for testing
import Test from './pages/Test/Test.jsx'
import { AuthContext } from '/src/components/Context.jsx'
import AccountManagement from '/src/model/AccountManagement.jsx'

export default function useRouteElements() {
  const [isAuth, setIsAuth] = useState(useContext(AuthContext) ? true : false)
  useEffect(() => {
    const checkAuth = async () => {
      if (isAuth) return
      await AccountManagement.isAuth((result) => {
        setIsAuth(result)
      })
    }
    checkAuth()
  }, [isAuth])
  const routeElementsWhenNotLoggedIn = useRoutes([
    {
      path: '*',
      element: (
        <MainLayout>
          <LandingPage />
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
      path: '/menu/:id',
      element: (
        <MainLayout>
          <ShowMenuPage />
        </MainLayout>
      )
    }
  ])

  const routeElementsLoggedIn = useRoutes([
    {
      path: '*',
      element: (
        <MainLayout>
          <LandingPage />
        </MainLayout>
      )
    },
    {
      path: '/yourMenu',
      element: (
        <MainLayout>
          <Menu />
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
      path: '/info',
      element: (
        <MainLayout>
          <Info />
        </MainLayout>
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
      path: '/menu/:id',
      element: (
        <MainLayout>
          <ShowMenuPage />
        </MainLayout>
      )
    }
  ])

  return isAuth ? routeElementsLoggedIn : routeElementsWhenNotLoggedIn
}
