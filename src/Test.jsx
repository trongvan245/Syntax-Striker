import AccountManagement from './model/AccountManagement.jsx'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from './components/Context.jsx'

export default function Test() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(useContext(AuthContext) ? true : false)
  useEffect(() => {
    const checkAuth = async () => {
      if (isLoggedIn) return
      await AccountManagement.isAuth((result) => {
        setIsLoaded(true)
        if (result) {
          setIsLoggedIn(true)
        }
      })
    }
    checkAuth()
  }, [isLoggedIn])
  return !isLoaded ? (
    <></>
  ) : (
    <div>
      <button
        onClick={() => {
          console.log('Testing....')
        }}
      >
        Test
      </button>
    </div>
  )
}
