import { Outlet } from 'react-router-dom'
// import RegisterHeader from '../../components/RegisterHeader/RegisterHeader'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function RegisterLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}
