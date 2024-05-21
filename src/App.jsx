import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Button, Stack } from 'react-bootstrap'
import useRouteElements from './useRouteElements'

function App() {
  const [count, setCount] = useState(0)

  const routeElements = useRouteElements()

  return <>{routeElements}</>
}

export default App
