import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='tw-grid tw-grid-cols-3 tw-w-full tw-bg-secondaryColor1 tw-px-10 tw-py-4'>
      <div className='tw-col-span-2 tw-flex tw-items-center tw-justify-start tw-space-x-6 tw-uppercase tw-text-2xl'>
        <div>Logo</div>
        <NavLink to={'/'}>
          <div>Home</div>
        </NavLink>
        <div>About Us</div>
      </div>
      <div className='tw-col-span-1 tw-flex tw-uppercase tw-text-xl tw-justify-center'>
        <NavLink to={'/login'} className='tw-bg-red-600 tw-p-2 tw-rounded-lg tw-text-white'>
          Login
        </NavLink>
      </div>
    </div>
  )
}
