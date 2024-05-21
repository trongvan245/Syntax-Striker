import { Outlet } from 'react-router-dom'
import RegisterHeader from '../../components/RegisterHeader/RegisterHeader'
import Footer from '../../components/Footer/Footer'

export default function RegisterLayout({ children }) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}
